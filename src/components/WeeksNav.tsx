import React from 'react'
import { View } from 'react-native'
import TextWeek from './Text/TextWeek'
import TextPeriod from './Text/TextPeriod'
import styled from 'rn-css'

const ViewWeek = styled.View`
  flex-direction: row;
  justify-content: space-around;
  border-radius: 15px;
`
const WeeksNav = () => {
  return (
    <View>
      <ViewWeek>
        <TextWeek>Semaine</TextWeek>
        <TextPeriod>du ... au ...</TextPeriod>
      </ViewWeek>
    </View>
  )
}

export default WeeksNav
