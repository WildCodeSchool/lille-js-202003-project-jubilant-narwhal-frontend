import React from 'react'

import styled from 'rn-css'

const FlecheDroiteStyle = styled.Image`
  width: 5em;
  height: 3em;
  pressduration: 0.3;
`
const FlecheDroiteBtn = () => {
  return (
    <FlecheDroiteStyle source={require('../../../assets/Images/flecheD.png')} />
  )
}
export default FlecheDroiteBtn
