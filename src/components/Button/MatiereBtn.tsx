import styled from 'rn-css'
import React from 'react'
import { Text } from 'react-native'

const MatiereBtnStyle = styled.TouchableOpacity`
  background: red;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  border: 2px solid black;
  pressduration: 0.3;
`

const MatiereBtn = () => {
  return (
    <MatiereBtnStyle
      onPress={() => {
        console.log('fr')
      }}
    >
      <Text>Français</Text>
    </MatiereBtnStyle>
  )
}
export default MatiereBtn
