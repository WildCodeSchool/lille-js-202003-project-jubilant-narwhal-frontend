import React from 'react'
import { View } from 'react-native'
import styled from 'rn-css'
import LeftArrow from './Button/LeftArrow'
import RightArrow from './Button/RightArrow'

const ViewWeek = styled.View`
  flex-direction: row;
  justify-content: space-around;
  border-radius: 15px;
`
const TextPeriod = styled.Text`
  color: black:
  font-size:4em;
`
const TextWeek = styled.Text`
  color: purple:
  font-size:4em;
`

const WeeksNav = () => {
  return (
    <View>
      <ViewWeek>
        <LeftArrow />
        <TextWeek>Semaine</TextWeek>
        <TextPeriod>du ... au ...</TextPeriod>
        <RightArrow />
      </ViewWeek>
    </View>
  )
}

export default WeeksNav
