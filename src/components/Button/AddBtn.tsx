import styled from 'rn-css'
import React from 'react'

// Styled components
const AddBtnStyled = styled.TouchableOpacity<{ color: any }>`
  border-radius: 10px;
  padding: 5px 20px;
  background-color: ${props => props.color};
  justify-content: center;
  align-items: center;
`

const AddBtnText = styled.Text`
  color: rgba(255, 255, 255, 1);
  font-weight: bold;
  font-size: 1em;
`

// Props type
type Props = {
  project: any
  addTask: any
}

const AddBtn = ({ project, addTask }: Props) => {
  return (
    <AddBtnStyled color={project.primary} onPress={addTask}>
      <AddBtnText>Ajouter</AddBtnText>
    </AddBtnStyled>
  )
}
export default AddBtn
