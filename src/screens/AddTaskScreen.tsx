import React from 'react'
import styled from 'rn-css'
import AddTaskContainer from '../containers/AddTaskContainer'

const ModalContainer = styled.View`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`

const AddTaskScreen = () => {
  return (
    <ModalContainer>
      <AddTaskContainer />
    </ModalContainer>
  )
}
export default AddTaskScreen
