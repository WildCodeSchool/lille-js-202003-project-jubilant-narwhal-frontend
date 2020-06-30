import React, { useState } from 'react'
import styled from 'rn-css'
import { SubjectsInfo } from '../theme/Infos'
// import PenBtn from './Button/PenBtn'
import { CheckBox, StyleSheet, TouchableOpacity } from 'react-native'

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

const styles = StyleSheet.create({
  checkbox: {
    alignSelf: 'center',
    width: 30,
    height: 30
  }
})

// Props type
type Props = {
  text: string
  removeTask: any
}

const TaskCard = ({ text, removeTask }: Props) => {
  const [isSelected, setSelection] = useState(false)

  return (
    <TaskCardWrapper
      color={SubjectsInfo[1].colors.background}
      selected={isSelected}
    >
      <ViewCardRow>
        <ViewCardRow>
          <Placeholder />
          <TaskCardSubject>Matière</TaskCardSubject>
        </ViewCardRow>
        <TouchableOpacity onPress={removeTask}>
          <PenBtnStyle
            source={require('../../assets/Images/pencil-circle.svg')}
          />
        </TouchableOpacity>
      </ViewCardRow>
      <ViewCardRow>
        <TaskCardText selected={isSelected}>{text}</TaskCardText>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
      </ViewCardRow>
    </TaskCardWrapper>
  )
}

export default TaskCard
