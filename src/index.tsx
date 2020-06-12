import React from 'react'
import { View } from 'react-native'
import DayColumn from './components/DayColumn'
import SendBtn from './components/Button/SendBtn'

const App = () => {
  return (
    <View>
      <DayColumn />
      <SendBtn />
    </View>
  )
}

export default App
