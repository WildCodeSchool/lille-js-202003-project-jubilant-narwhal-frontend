import React, { useState } from 'react'
import styled from 'rn-css'

import PenBtn from './Button/PenBtn'

const ColumnWrapper = styled.View<{ currentDay: boolean }>`
  border-color:  #6E4BC4;
  border-width: ${props => props.currentDay ? '3px' : '1px'};
  width: ${props => props.currentDay ? '262px' : '227px'};
  height: ${props => props.currentDay ? '760px' : '707px'};
  border-radius: 3px;
  background: white;
`
const DateWrapper = styled.View<{ currentDay: boolean }>`
  width: 100%;
  height: 70px;
  background: ${props => props.currentDay ? 'rgb(110,75,196)' : 'rgb(136,114,191)'} ;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
`
const DateText = styled.Text<{currentDay: boolean}>`
  color: white;
  font-weight: bold;
  font-size: ${props => props.currentDay ? '1.5em' : '1.3em'};
`

const DayColumn = () => {
  const [currentDay] = useState<boolean>(false)
  return (
    <ColumnWrapper currentDay={currentDay}>
      <DateWrapper currentDay={currentDay}>
        <DateText currentDay={currentDay}>Mercredi 27 juillet</DateText>
        <PenBtn/>
      </DateWrapper>
    </ColumnWrapper>)
}
export default DayColumn
