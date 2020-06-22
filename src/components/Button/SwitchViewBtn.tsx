import React from 'react'
import styled from 'rn-css'
import ViewLeftBtn from './ViewLeftBtn'
import ViewRightBtn from './ViewRightBtn'

const Container = styled.View`
  width: 300px;
  flex-direction: row;
  justify-content: center;
  padding: 0;
`
const SwitchView = () => {
  return (
    <Container>
      <ViewLeftBtn />
      <ViewRightBtn />
    </Container>
  )
}

export default SwitchView
