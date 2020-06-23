import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import moment from 'moment'
import FlecheDroiteBtn from '../components/Button/FlecheDroiteBtn'

moment.locale('fr')

const Calendar = () => {
  const today = new Date()
  const [number, setNumber] = useState(0)

  const todayCalendar = moment(today).format('dddd')

  const printWeek = (todayCalendar: any) => {
    let toPrint: any = []

    switch (todayCalendar) {
      case 'lundi':
        toPrint.push(
          moment()
            .add(number, 'days')
            .format('dddd Do MMMM')
        )
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
            .subtract(1 - number, 'days')
            .format('dddd Do MMMM'),
          moment()
            .add(number, 'days')
            .format('dddd Do MMMM')
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
            .subtract(2 - number, 'days')
            .format('dddd Do MMMM'),
          moment()
            .subtract(1 - number, 'days')
            .format('dddd Do MMMM'),
          moment()
            .add(number, 'days')
            .format('dddd Do MMMM')
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
              .subtract(i - number, 'days')
              .format('dddd Do MMMM')
          )
        }
        toPrint.push(
          moment()
            .add(number, 'days')
            .format('dddd Do MMMM'),
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
              .subtract(i - number, 'days')
              .format('dddd Do MMMM')
          )
        }
        toPrint.push(
          moment()
            .add(number, 'days')
            .format('dddd Do MMMM')
        )
        break
      case 'samedi':
        toPrint = []
        for (let i = 2; i > 7; i++) {
          toPrint.push(
            moment()
              .add(i + number, 'days')
              .format('dddd Do MMMM')
          )
        }
        break
      case 'dimanche':
        toPrint = []
        for (let i = 1; i > 6; i++) {
          toPrint.push(
            moment()
              .add(i + number, 'days')
              .format('dddd Do MMMM')
          )
        }
    }

    return toPrint
  }

  const addOneWeek = () => {
    setNumber(number + 7)
  }

  const removeOneWeek = () => {
    setNumber(number - 7)
  }

  const returnCurrentWeek = () => {
    setNumber(0)
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
      <TouchableOpacity onPress={addOneWeek}>
        <FlecheDroiteBtn />
      </TouchableOpacity>
      <TouchableOpacity onPress={removeOneWeek}>
        <Text>semaine précédente</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={returnCurrentWeek}>
        <Text>retour à la semaine</Text>
      </TouchableOpacity>
    </>
  )
}

export default Calendar
