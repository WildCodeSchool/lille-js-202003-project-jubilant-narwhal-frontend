import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import moment from 'moment'
import FlecheDroiteBtn from '../components/Button/FlecheDroiteBtn'

moment.locale('fr') // 'fr'

const Calendar = () => {
  const today = new Date()
  const [date, setDate] = useState(moment(today).format('dddd Do MMMM'))
  const [number, setNumber] = useState(0)
  const [toAdd, setToAdd] = useState(7)

  const todayCalendar = moment(today).format('dddd')

  const printWeek = (todayCalendar: any) => {
    let toPrint = [date]

    switch (todayCalendar) {
      case 'lundi':
        for (let i = 1; i < 5; i++) {
          toPrint.push(
            moment()
              .add(i + number, 'days')
              .format('dddd Do MMMM')
          )
        }
        break
      case 'mardi':
        toPrint = [
          moment()
            .subtract(1 + number, 'days')
            .format('dddd Do MMMM'),
          date
        ]
        for (let i = 1; i < 4; i++) {
          toPrint.push(
            moment()
              .add(i + number, 'days')
              .format('dddd Do MMMM')
          )
        }
        break
      case 'mercredi':
        toPrint = [
          moment()
            .subtract(2 + number, 'days')
            .format('dddd Do MMMM'),
          moment()
            .subtract(1 + number, 'days')
            .format('dddd Do MMMM'),
          date
        ]
        for (let i = 1; i < 3; i++) {
          toPrint.push(
            moment()
              .add(i + number, 'days')
              .format('dddd Do MMMM')
          )
        }
        break
      case 'jeudi':
        toPrint = []
        for (let i = 3; i > 0; i--) {
          toPrint.push(
            moment()
              .subtract(i + number, 'days')
              .format('dddd Do MMMM')
          )
        }
        toPrint.push(
          date,
          moment()
            .add(1 + number, 'days')
            .format('dddd Do MMMM ')
        )
        break
      case 'vendredi':
        toPrint = []
        for (let i = 4; i > 0; i--) {
          toPrint.push(
            moment()
              .subtract(i + number, 'days')
              .format('dddd Do MMMM')
          )
        }
        toPrint.push(date)
        break
    }

    return toPrint
  }

  const addOneWeek = () => {
    setToAdd(toAdd + 7)

    setNumber(number + 7)
    setDate(
      moment()
        .add(toAdd, 'days')
        .format('dddd Do MMMM')
    )
  }

  return (
    <>
      <View>
        <Text>{moment(today).format('dddd Do MMMM YYYY')}</Text>
      </View>
      <View>
        {printWeek(todayCalendar).map((day, i) => (
          <Text key={i}>{day}</Text>
        ))}
      </View>
      <TouchableOpacity onPress={addOneWeek}>
        <FlecheDroiteBtn />
      </TouchableOpacity>
    </>
  )
}

export default Calendar
