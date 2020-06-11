import React from 'react'
import { Text, Image } from 'react-native'
import styled from 'rn-css'

const Column = styled.View`
  border: 1px solid black;
  width: 20em;
  height: 40em;
`

const DayOverlay = () => {
  return (
    <Column>
      <Text>Jour Férié</Text>
      <Image source={require('../../assets/Images/flecheD.png')} />
    </Column>
  )
}

export default DayOverlay
