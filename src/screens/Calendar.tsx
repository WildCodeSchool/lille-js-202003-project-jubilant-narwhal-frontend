import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

const months = [
  'Janvier',
  'Fevrier',
  'Mars',
  'Avril',
  'Mai',
  'Juin',
  'Juillet',
  'Aôut',
  'Septembre',
  'Octobre',
  'Novembre',
  'Decembre'
]

const weekDays = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']
const nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
export default function Calendar () {
  const activeDate = new Date()

  const generateMatrix = () => {
    const matrix: (string | number)[][] = []
    // Create header
    matrix[0] = weekDays
    const year = activeDate.getFullYear()
    const month = activeDate.getMonth()
    const firstDay = new Date(year, month, 1).getDay()
    let maxDays = nDays[month]
    if (month === 1) {
      // February
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        maxDays += 1
      }
      let counter = 1
      for (let row = 1; row < 7; row++) {
        matrix[row] = []
        for (let col = 0; col < 7; col++) {
          matrix[row][col] = -1
          if (row === 1 && col >= firstDay) {
            // Fill in rows only after the first day of the month
            matrix[row][col] = counter++
          } else if (row > 1 && counter <= maxDays) {
            // Fill in rows only if the counter's not greater than
            // the number of days in the month
            matrix[row][col] = counter++
          }
        }
      }

      return matrix
    }
  }

  useEffect(() => {
    generateMatrix()
  }, [])

  return (
    <View>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 18,
          textAlign: 'center'
        }}
      >
        {months[activeDate.getMonth()]} &nbsp;
        {activeDate.getFullYear()}
      </Text>
    </View>
  )
}
