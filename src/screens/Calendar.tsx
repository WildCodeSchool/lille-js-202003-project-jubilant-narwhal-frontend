import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import moment from 'moment'
import FlecheDroiteBtn from '../components/Button/FlecheDroiteBtn'

moment.locale('fr')

const Calendar = () => {
  const today = new Date()
  const [date, setDate] = useState(moment(today).format('dddd Do MMMM'))
  const [number, setNumber] = useState(0)
  const [toAdd, setToAdd] = useState(7)
  const [toSubstract, setToSubstract] = useState(7)

  const todayCalendar = moment(today).format('dddd')

  const printWeek = (todayCalendar: any) => {
    let toPrint: any = []

    switch (todayCalendar) {
      case 'lundi':
        toPrint.push(date)
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
  const addSubWeek = (title: string) => {
    setToAdd(toAdd + 7)
    if (title === 'addOneWeek') {
      setNumber(number + 7)
      setDate(
        moment()
          .add(toAdd, 'days')
          .format('dddd Do MMMM')
      )
    } else if (title === 'substractOneWeek') {
      setNumber(number - 7)
      setDate(
        moment()
          .add(toSubstract, 'days')
          .format('dddd Do MMMM')
      )
      setToSubstract(toSubstract - 7)
    }
  }

  return (
    <>
      <View>
        <Text>{moment(today).format('dddd Do MMMM YYYY')}</Text>
      </View>
      <View>
        {printWeek(todayCalendar).map((day: any, i: any) => (
          <Text key={i}>{day}</Text>
        ))}
      </View>
      <TouchableOpacity onPress={() => addSubWeek('addOneWeek')}>
        <FlecheDroiteBtn />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addSubWeek('substractOneWeek')}>
        <Text>semaine précédente</Text>
      </TouchableOpacity>
    </>
  )
}

export default Calendar
