import React from 'react'
import { View } from 'react-native'
import DayColumn from './components/DayColumn'
import SendBtn from './components/Button/SendBtn'
import WeeksNav from './components/WeeksNav'

const App = () => {
  return (
    <View>
      <WeeksNav />
      <DayColumn />
      <SendBtn />
    </View>
  )
}

export default App
