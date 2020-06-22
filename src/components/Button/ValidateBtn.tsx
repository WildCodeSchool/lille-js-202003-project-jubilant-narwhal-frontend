import styled from 'rn-css'
import React from 'react'
import { Text } from 'react-native'

const ValidateBtnStyled = styled.TouchableOpacity`
  background: rgba(154, 205, 50, 0, 7);
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  border: 2px solid rgba(0, 0, 0, 1);
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
