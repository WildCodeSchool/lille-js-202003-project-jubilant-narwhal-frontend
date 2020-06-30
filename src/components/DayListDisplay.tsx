import React, { useState } from 'react'
import styled from 'rn-css'

const DayWrapper = styled.View`
  padding: 20px;
  width: 770px;
  height: 70px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const DateText = styled.Text<{ currentDay: boolean }>`
  color: ${props =>
    props.currentDay ? 'rgba(110,75,196,1)' : 'rgba(137,137,137,1)'};
  font-size: ${props => (props.currentDay ? '1.7em' : '1.5em')};
`

const Line = styled.View<{ currentDay: boolean }>`
  width: 550px;
  height: 0px;
  border-width: ${props => (props.currentDay ? '3px' : '1px')};
  border-color: ${props =>
    props.currentDay ? 'rgba(110,75,196,1)' : 'rgba(137,137,137,1)'};
`

const DayListDisplay = () => {
  const [currentDay] = useState<boolean>(false)
  return (
    <DayWrapper>
      <DateText currentDay={currentDay}>Mercredi 27</DateText>
      <Line currentDay={currentDay} />
    </DayWrapper>
  )
}
export default DayListDisplay
