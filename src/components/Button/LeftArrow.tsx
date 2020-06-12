import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'rn-css'

const LeftArrowStyle = styled.Image`
  width: 5em;
  height: 3em;
  pressduration: 0.3;
`
const LeftArrow = () => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('fleche')
      }}
    >
      <LeftArrowStyle source={require('../../../assets/Images/flecheD.png')} />
    </TouchableOpacity>
  )
}
export default LeftArrow
