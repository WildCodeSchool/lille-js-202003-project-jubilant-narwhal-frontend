import React, { useState } from 'react'
import styled from 'rn-css'
import { SubjectsInfo } from '../theme/Infos'
import PenBtn from './Button/PenBtn'
import { CheckBox, StyleSheet } from 'react-native'

const TaskCardWrapper = styled.View<{ color: string, selected: boolean }>`
  padding: 20px;
  background: ${props => props.selected ? 'gray' : props.color};
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

const styles = StyleSheet.create({
  checkbox: {
    alignSelf: 'center',
    width: 30,
    height: 30
  }
})

const TaskCard = () => {
  const [isSelected, setSelection] = useState(false)

  return (
    <TaskCardWrapper color = {SubjectsInfo[1].color.background} selected={isSelected}>
      <ViewCardRow>
        <ViewCardRow>
          <Placeholder />
          <TaskCardText>Matière</TaskCardText>
        </ViewCardRow>
        <PenBtn />
      </ViewCardRow>
      <ViewCardRow>
        <TaskCardText>Devoir à faire</TaskCardText>
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
