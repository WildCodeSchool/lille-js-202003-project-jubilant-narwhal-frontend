import React from 'react'
import styled from 'rn-css'
import { Image } from 'react-native'

const Column = styled.View`
  justify-content: center;
  align-items: center;
  width: 227px;
  height: 707px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 3px;
`

const TaskDoneOverlay = () => {
  return (
    <Column>
      <Image
        style={{ width: '150px', height: '150px' }}
        source={require('../../assets/Images/Check.png')}
      />
    </Column>
  )
}

export default TaskDoneOverlay
