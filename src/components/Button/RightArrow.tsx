import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'rn-css'

const RightArrowStyle = styled.Image`
  width: 5em;
  height: 3em;
`
const RightArrow = () => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('fleche')
      }}
    >
      <RightArrowStyle source={require('../../../assets/Images/flecheD.png')} />
    </TouchableOpacity>
  )
}
export default RightArrow
