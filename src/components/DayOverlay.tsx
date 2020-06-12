import React from 'react'
import styled from 'rn-css'

const Column = styled.View`
  border: 1px solid black;
  background: grey;
  opacity: 0.5;
  width: 20em;
  height: 40em;

  align-items: center;
`

const TextColumn = styled.Text`
  color: blue;
  font-size: 5em;
  text-align: center;
`

const DayOverlay = () => {
  return (
    <Column>
      <TextColumn>Jour Férié</TextColumn>
    </Column>
  )
}

export default DayOverlay
