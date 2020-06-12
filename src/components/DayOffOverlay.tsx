import React from 'react'
import styled from 'rn-css'

const Column = styled.View`
  justify-content: center;
  align-items: center;
  width: 20em;
  height: 40em;
  background-color: rgba(0, 0, 0, 0.5);
`

const OverlayText = styled.Text`
  color: white;
  font-size: 3em;
`

const DayOffOverlay = () => {
  return (
    <Column>
      <OverlayText>Jour Férié</OverlayText>
    </Column>
  )
}

export default DayOffOverlay
