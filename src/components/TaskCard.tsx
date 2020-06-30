import React from 'react'
import styled from 'rn-css'
import { SubjectsInfo } from '../theme/Infos'
import { TouchableOpacity } from 'react-native'
import PenBtn from './Button/PenBtn'

const TaskCardWrapper = styled.View<{ color: string; selected: boolean }>`
  padding: 20px;
  background: ${props => (props.selected ? 'gray' : props.color)};
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
const TaskCardSubject = styled.Text`
  color: white;
  font-size: 2em;
`

const TaskCardText = styled.Text<{ selected: boolean }>`
  color: white;
  font-size: 2em;
  text-decoration-line: ${props => (props.selected ? 'line-through' : 'none')};
`
const PenBtnStyle = styled.Image`
  width: 1em;
  height: 1em;
  border-radius: 25%;
`

const TaskBtn = styled.TouchableOpacity<{ selected: boolean }>`
  background: ${props => (props.selected ? 'white' : 'green')};
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`

// Props type
type Props = {
  text: string
  removeTask: any
  isCompleted: boolean
  completeTask: any
}

const TaskCard = ({ text, removeTask, isCompleted, completeTask }: Props) => {
  return (
    <TaskCardWrapper
      color={SubjectsInfo[1].colors.background}
      selected={isCompleted}
    >
      <ViewCardRow>
        <ViewCardRow>
          <Placeholder />
          <TaskCardSubject>Matière</TaskCardSubject>
        </ViewCardRow>
        <PenBtn removeTask={removeTask} />
      </ViewCardRow>
      <ViewCardRow>
        <TaskCardText selected={isCompleted}>{text}</TaskCardText>
        <TaskBtn selected={isCompleted} onPress={completeTask}>
          v
        </TaskBtn>
      </ViewCardRow>
    </TaskCardWrapper>
  )
}

export default TaskCard
