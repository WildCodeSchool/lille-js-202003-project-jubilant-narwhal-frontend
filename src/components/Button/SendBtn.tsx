import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'rn-css'

const SendBtnStyle = styled.Image`
  pressduration: 0.3;
  width: 100px;
  height: 100px;
`

const ImageSendBtn = () => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('plus')
      }}
    >
      <SendBtnStyle
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
      />
    </TouchableOpacity>
  )
}

export default ImageSendBtn
