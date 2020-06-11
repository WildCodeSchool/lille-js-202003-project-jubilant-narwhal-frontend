import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'rn-css'

const FlecheDroiteStyle = styled.Image`
  width: 5em;
  height: 3em;
  pressduration: 0.3;
`
const FlecheDroiteBtn = () => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('fleche')
      }}
    >
      <FlecheDroiteStyle
        source={require('../../../assets/Images/flecheD.png')}
        /* source={{ uri: 'https://images.emojiterra.com/google/android-10/512px/27a1.png' }} */
      />
    </TouchableOpacity>
  )
}
export default FlecheDroiteBtn
