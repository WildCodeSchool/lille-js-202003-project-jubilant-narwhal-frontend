import React from 'react'
import styled from 'rn-css'

const Column = styled.View`
  justify-content: center;
  align-items: center;
  width: 227px;
  height: 707px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 3px;
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
