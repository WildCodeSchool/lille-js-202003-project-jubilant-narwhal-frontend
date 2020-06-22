import React from 'react'
import styled from 'rn-css'

const Column = styled.View`
  justify-content: center;
  align-items: center;
  width: 227px;
  height: 707px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 3px;
`
// This style doesn't work with rn-css
const CheckImage = styled.Image`
  width: 150px;
  height: 150px;
`

const TaskDoneOverlay = () => {
  return (
    <Column>
      <CheckImage source={require('../../assets/Images/Check.png')} />
    </Column>
  )
}

export default TaskDoneOverlay
