import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'rn-css'

const PenBtnStyle = styled.Image`
  width: 20px;
  height: 20px;
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
