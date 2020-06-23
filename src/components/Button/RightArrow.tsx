import React from 'react'

import styled from 'rn-css'

const RightArrowStyle = styled.Image`
  width: 5em;
  height: 3em;
`
const RightArrow = () => {
  return (

    <RightArrowStyle source={require('../../../assets/Images/flecheD.png')} />

  )
}
export default RightArrow
