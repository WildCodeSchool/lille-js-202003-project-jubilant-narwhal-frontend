import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'rn-css'

const PenBtnStyle = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 25%;
`

const PenBtn = () => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('edit')
      }}
    >
      <PenBtnStyle
        source={require('../../../assets/Images/pencil-circle.svg')}
      />
    </TouchableOpacity>
  )
}
export default PenBtn
