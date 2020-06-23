import React from 'react'

import styled from 'rn-css'

const LeftArrowStyle = styled.Image`
  width: 5em;
  height: 3em;
`
const LeftArrow = () => {
  return (

    <LeftArrowStyle source={require('../../../assets/Images/flecheG.png')} />

  )
}
export default LeftArrow
