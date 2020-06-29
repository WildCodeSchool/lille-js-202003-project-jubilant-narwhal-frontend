import styled from 'rn-css'
import React, { useState } from 'react'
import { Text } from 'react-native'

const ValidateBtnStyled = styled.TouchableOpacity`
  background: rgba(154, 205, 50, 0.7);
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  border: 2px solid 'rgba(0,0,0,1)';
  pressduration: 0.3;
`

const ValidateBtn = ({ handleSubmit }) => {
  return (
    <ValidateBtnStyled onPress={() => handleSubmit}>
      <Text>Ajouter devoir</Text>
    </ValidateBtnStyled>
  )
}
export default ValidateBtn
