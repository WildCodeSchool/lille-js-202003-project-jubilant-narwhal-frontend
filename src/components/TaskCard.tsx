import React from 'react'
import styled from 'rn-css'
import { Colors } from '../theme/Colors'

import PenBtn from './Button/PenBtn'
import Checkbox from './Button/CheckBox'

const TaskCardWrapper = styled.View<{ color: string }>`
  padding: 20px;
  background: ${props => props.color};
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
<<<<<<< HEAD
  background: gray;
=======
  background: rgba(165, 165, 165, 1);
>>>>>>> 4cb7b6355c5f436f545c905f5eeefe12d32be0b4
`
const TaskCardText = styled.Text`
  color: rgba(0, 0, 0, 1);
  font-size: 2em;
`
const TaskCard = () => {
  return (
    <TaskCardWrapper color={Colors.cardBckg.svt}>
      <ViewCardRow>
        <ViewCardRow>
          <Placeholder />
          <TaskCardText>Matière</TaskCardText>
        </ViewCardRow>
        <PenBtn />
      </ViewCardRow>
      <ViewCardRow>
        <TaskCardText>Devoir à faire</TaskCardText>
        <Checkbox />
      </ViewCardRow>
    </TaskCardWrapper>
  )
}

export default TaskCard
