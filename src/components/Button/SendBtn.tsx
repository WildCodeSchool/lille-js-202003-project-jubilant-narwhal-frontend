import styled from 'rn-css'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const SendBtnStyled = styled.Image`
  pressduration: 0.3;
  width: 100px;
  height: 100px;
`

const SendBtn = () => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('send')
      }}
    >
      <SendBtnStyled source={require('../../../assets/Images/AddButton.png')} />
    </TouchableOpacity>
  )
}
export default SendBtn
