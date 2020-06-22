import styled from 'rn-css'
import React from 'react'
import { Text, View } from 'react-native'
import ColorsSubjects from '../../theme/Colors'

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
      {ColorsSubjects.map(sub => {
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
