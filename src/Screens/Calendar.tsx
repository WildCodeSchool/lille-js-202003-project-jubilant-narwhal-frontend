import React, { useState } from 'react'
import { View } from 'react-native'
import moment from 'moment'
import styled from 'rn-css'

const CalendarView = styled.View`
  flex-direction: row;
  justify-content: space-around;
`

const TextCalendar = styled.Text`
  font-size: 3em;
  text-align: center;
`

const TextDay = styled.Text`
  font-size: 2em;
`
moment.locale('fr')

const Calendar = () => {
  const today = new Date()
  const [date] = useState(moment(today).format('dddd Do MMMM'))
  const [number] = useState(0)

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

  return (
    <>
      <View>
        <TextCalendar>{moment(today).format('dddd Do MMMM YYYY')}</TextCalendar>
      </View>

      <CalendarView>
        {printWeek(todayCalendar).map((day: any, i: any) => (
          <TextDay key={i}>{day}</TextDay>
        ))}
      </CalendarView>
    </>
  )
}

export default Calendar
