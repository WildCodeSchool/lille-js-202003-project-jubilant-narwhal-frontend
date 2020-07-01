import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Navigation from 'react-unavigation'
import styled from 'rn-css'
import Calendar from './screens/Calendar'

import CalendarDay from './screens/CalendarDay'
const PropsView = styled.View<{ name: string }>`
  background-color: lightblue;
`
const App = () => {
  const [active, setActive] = useState<string>('home')
  return (
    <View>
      <TouchableOpacity onPress={() => setActive('calendar')}>
        <Text>Calendar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setActive('day')}>
        <Text>AddTask</Text>
      </TouchableOpacity>
      <Navigation active={active}>
        <PropsView name="calendar">
          <Calendar />
        </PropsView>
        <PropsView name="day">
          <CalendarDay />
        </PropsView>
      </Navigation>
    </View>
  )
}
export default App
