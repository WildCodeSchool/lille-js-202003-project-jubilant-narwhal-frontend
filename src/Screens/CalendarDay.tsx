import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import styled from 'rn-css'
import moment from 'moment'
import ColumnDayByDay from '../components/ColumnDayByDay'

const SwitchTextStyled = styled.Text`
  width: 100px;
  height: 100px;
  display: inline-block;
`
const CalendarView = styled.View`
  flex-direction: row;
  justify-content: space-around;
`

const TextCalendar = styled.Text`
  font-size: 3em;
  text-align: center;
`
const SwitchDayWeekButton = (navigation: any) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('CalendarDay')}>
      <SwitchTextStyled>Semaine </SwitchTextStyled>
    </TouchableOpacity>
  )
}

moment.locale('fr')

const CalendarDay = () => {
  const today = new Date()
  // const [number, setNumber] = useState(0)

  // const todayCalendar = moment(today).format('dddd')

  // const printWeek = (todayCalendar: any) => {
  //   let toPrint: any = []

  //   switch (todayCalendar) {
  //     case 'lundi':
  //       toPrint.push(
  //         moment()
  //           .add(number, 'days')
  //           .format('dddd Do MMMM')
  //       )
  //       for (let i = 1; i < 5; i++) {
  //         toPrint.push(
  //           moment()
  //             .add(i + number, 'days')
  //             .format('dddd Do MMMM')
  //         )
  //       }

  //       break
  //     case 'mardi':
  //       toPrint = [
  //         moment()
  //           .subtract(1 - number, 'days')
  //           .format('dddd Do MMMM'),
  //         moment()
  //           .add(number, 'days')
  //           .format('dddd Do MMMM')
  //       ]
  //       for (let i = 1; i < 4; i++) {
  //         toPrint.push(
  //           moment()
  //             .add(i + number, 'days')
  //             .format('dddd Do MMMM')
  //         )
  //       }
  //       break
  //     case 'mercredi':
  //       toPrint = [
  //         moment()
  //           .subtract(2 - number, 'days')
  //           .format('dddd Do MMMM'),
  //         moment()
  //           .subtract(1 - number, 'days')
  //           .format('dddd Do MMMM'),
  //         moment()
  //           .add(number, 'days')
  //           .format('dddd Do MMMM')
  //       ]
  //       for (let i = 1; i < 3; i++) {
  //         toPrint.push(
  //           moment()
  //             .add(i + number, 'days')
  //             .format('dddd Do MMMM')
  //         )
  //       }
  //       break
  //     case 'jeudi':
  //       toPrint = []
  //       for (let i = 3; i > 0; i--) {
  //         toPrint.push(
  //           moment()
  //             .subtract(i - number, 'days')
  //             .format('dddd Do MMMM')
  //         )
  //       }
  //       toPrint.push(
  //         moment()
  //           .add(number, 'days')
  //           .format('dddd Do MMMM'),
  //         moment()
  //           .add(1 + number, 'days')
  //           .format('dddd Do MMMM ')
  //       )
  //       break
  //     case 'vendredi':
  //       toPrint = []
  //       for (let i = 4; i > 0; i--) {
  //         toPrint.push(
  //           moment()
  //             .subtract(i - number, 'days')
  //             .format('dddd Do MMMM')
  //         )
  //       }
  //       toPrint.push(
  //         moment()
  //           .add(number, 'days')
  //           .format('dddd Do MMMM')
  //       )
  //       break
  //     case 'samedi':
  //       toPrint = []
  //       for (let i = 2; i > 7; i++) {
  //         toPrint.push(
  //           moment()
  //             .add(i + number, 'days')
  //             .format('dddd Do MMMM')
  //         )
  //       }
  //       break
  //     case 'dimanche':
  //       toPrint = []
  //       for (let i = 1; i > 6; i++) {
  //         toPrint.push(
  //           moment()
  //             .add(i + number, 'days')
  //             .format('dddd Do MMMM')
  //         )
  //       }
  //   }

  //   return toPrint
  // }
  // const returnCurrentWeek = () => {
  //   setNumber(0)
  // }

  // const addOneWeek = () => {
  //   setNumber(number + 7)
  // }

  // const removeOneWeek = () => {
  //   setNumber(number - 7)
  // }
  console.log('todayCalendar', moment(today).format('dddd Do MMMM YYYY'))
  return (
    <>
      <View>
        <TextCalendar>{moment(today).format('dddd Do MMMM YYYY')}</TextCalendar>
      </View>

      <CalendarView>

        <ColumnDayByDay day={moment(today).format('dddd Do MMMM YYYY')} />

      </CalendarView>

      <SwitchDayWeekButton />
    </>
  )
}

export default CalendarDay
