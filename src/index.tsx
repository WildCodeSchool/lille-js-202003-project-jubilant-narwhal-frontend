import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Calendar from './Screens/Calendar'

import CalendarDay from './Screens/CalendarDay'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="CalendarDay" component={CalendarDay} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
