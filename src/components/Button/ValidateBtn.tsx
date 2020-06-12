import styled from 'rn-css'
import React from 'react'
import { Text } from 'react-native'

const ValidateBtnStyled = styled.TouchableOpacity`
  background: blue;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  border: 2px solid black;
  pressduration: 0.3;
`

const ValidateBtn = () => {
  return (
    <ValidateBtnStyled
      onPress={() => {
        console.log('fr')
      }}
    >
      <Text>Ajouter</Text>
    </ValidateBtnStyled>
  )
}
export default ValidateBtn
