import React from 'react'
import styled from 'rn-css'

const MonthWrapper = styled.View`
  background-color: rgba(110, 75, 196, 0.7);
  border-radius: 3px;
  padding: 20px;
  width: 770px;
  height: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const MonthText = styled.Text`
  color: rgba(0, 0, 0, 1);
  font-size: 1.5em;
  text-transform: uppercase;
`

const MonthListDisplay = () => {
  return (
    <MonthWrapper>
      <MonthText>Juin 2020</MonthText>
    </MonthWrapper>
  )
}
export default MonthListDisplay
