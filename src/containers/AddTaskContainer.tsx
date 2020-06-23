import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'
import styled from 'rn-css'

import { SubjectsColors, ProjectColors } from '../theme/Colors'
import MatiereBtn from '../components/Button/MatiereBtn'

// Styled Components
const ModalContainer = styled.View`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`
const AddTaskWrapper = styled.View<{ color: any }>`
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  width: 75vw;
  height: 70vh;
  border-radius: 3px;
  border-width: 2px;
  border-color: ${props => props.color.primary};
`
const ModalTitle = styled.Text<{ color: any }>`
  color: ${props => props.color.primary};
  font-size: 3em;
`

const BtnWrapper = styled.View`
  flex-direction: row;
  border: 1px solid red;
  justify-content: space-around;
  width: 50vw;
`
// Variables for the state
const InitialState = [...SubjectsColors]

const AddTaskContainer = () => {
  const [selectedSubject, setSelectedSub] = useState<string>('')
  const [subjectTheme, setSubjectTheme] = useState(InitialState)

  useEffect(() => {
    subjectTheme.map(sub => {
      if (sub.selected === true) {
        setSelectedSub(sub.label)
      }
    })
  }, [selectedSubject])

  const handleChange = (nb: number) => {
    subjectTheme.map(sub => {
      sub.selected = false
    })
    subjectTheme[nb].selected = true
    setSubjectTheme(subjectTheme)
    setSelectedSub(subjectTheme[nb].label)
  }

  return (
    <ModalContainer>
      <AddTaskWrapper color={ProjectColors}>
        <ModalTitle color={ProjectColors}>Ajoute un devoir à faire</ModalTitle>
        <Text>{selectedSubject}</Text>
        <BtnWrapper>
          {subjectTheme.map((sub, index) => (
            <MatiereBtn
              subject={sub}
              handleChange={() => handleChange(index)}
              key={index}
            />
          ))}
        </BtnWrapper>
      </AddTaskWrapper>
    </ModalContainer>
  )
}

export default AddTaskContainer
