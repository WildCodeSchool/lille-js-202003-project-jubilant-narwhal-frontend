import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'rn-css'

const PenBtnStyle = styled.Image`
  width: 1em;
  height: 1em;
  border-radius: 25%;
  pressduration: 0.3;
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
