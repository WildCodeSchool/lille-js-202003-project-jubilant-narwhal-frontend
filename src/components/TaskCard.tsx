import React from 'react'
import PenBtn from './Button/PenBtn'
import CheckBtn from './Button/CheckBtn'
import styled from 'rn-css'

const TaskCardWrapper = styled.View`
padding: 20px;
    background: pink;
    border-radius: 10px;
    justify-content: space-between;
    width: 459px;
    height: 119px;
`
const ViewCardRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const Placeholder = styled.View`
    margin-right: 10px;
    width: 30px;
    height: 30px;
    background: gray;
`
const TaskCardText = styled.Text`
  color: white;
  font-size: 2em;
`
const TaskCard = () => {
  return (
    <TaskCardWrapper>
      <ViewCardRow>
        <ViewCardRow>
          <Placeholder />
          <TaskCardText>Matière</TaskCardText>
        </ViewCardRow>
        <PenBtn />
      </ViewCardRow>
      <ViewCardRow>
        <TaskCardText>Devoir à faire</TaskCardText>
        <CheckBtn />
      </ViewCardRow>
    </TaskCardWrapper>
  )
}

export default TaskCard
