import styled from 'rn-css'
import React from 'react'
import { Text, View } from 'react-native'
const subjectArray = [
  { subject: 'Français', color: 'red' },
  { subject: 'Mathématiques', color: 'blue' },
  { subject: 'Langues vivantes', color: 'green' },
  { subject: 'SVT', color: 'yellow' },
  { subject: 'Physique_chimie', color: 'pink' },
  { subject: 'Histoire_géographie', color: 'purple' }
]

const MatiereBtnStyle = styled.TouchableOpacity<{ color: string }>`
  background: ${props => props.color};
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 100px;
  height: 50px;
  border: 2px solid black;
`

const MatiereBtn = () => {
  return (
    <View>
      {subjectArray.map(sub => {
        return (
          <MatiereBtnStyle
            color={sub.color}
            onPress={() => {
              console.log(sub.subject)
            }}
          >
            <Text>{sub.subject}</Text>
          </MatiereBtnStyle>
        )
      })}
    </View>
  )
}
export default MatiereBtn
