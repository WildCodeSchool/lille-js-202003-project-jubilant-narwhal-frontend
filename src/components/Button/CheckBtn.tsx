import React from 'react'
import styled from 'rn-css'

const CheckBtnStyle = styled.Image`
  width: 25px;
  height: 25px;
  
`
const CheckBox = styled.TouchableOpacity`
    width: 30px;   
    background: black;
    border-radius: 10px;
`

const CheckBtn = () => {
  return (
    <CheckBox
      onPress={() => {
        console.log('checked')
      }}
    >
      <CheckBtnStyle
        source={require('../../../assets/Images/Check.png')}
      />
    </CheckBox>
  )
}
export default CheckBtn
