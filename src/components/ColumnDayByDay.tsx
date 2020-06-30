import React from 'react'
import styled from 'rn-css'
import moment from 'moment'
moment.locale('fr')
const toMatch = moment(new Date()).format('dddd Do MMMM')
const ColumnWrapper = styled.View<{ today: any }>`
  border-color: rgba(110, 75, 196, 1);
  border-width: ${props => (props.today === toMatch ? '3px' : '1px')};
  width: ${props => (props.today === toMatch ? '262px' : '227px')};
  height: ${props => (props.today === toMatch ? '760px' : '707px')};
  border-radius: 3px;
  background: rgba(255, 255, 255, 1);
`
const DateWrapper = styled.View<{ today: any }>`
  width: 100%;
  height: 70px;
  background: ${props =>
    props.today === toMatch ? 'rgba(105,228,57,1)' : 'rgba(110,75,196,1)'};
  flex-wrap: nowrap;
  align-items: center;
`
const DateText = styled.Text<{ today: any }>`
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: ${props => (props.today === toMatch ? '1.5em' : '1.3em')};
`

const ColumnDayByDay = (days: any) => {
  console.log('columnDayByDay', days.day)
  return (
    <>
      <ColumnWrapper today={days.day}>
        <DateWrapper today={days.day}>
          <DateText today={days.day}>{days.day}</DateText>
        </DateWrapper>
      </ColumnWrapper>
    </>
  )
}
export default ColumnDayByDay
