import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'
import styled from 'rn-css'

import { SubjectsColors, ProjectColors } from '../theme/Colors'
import MatiereBtn from '../components/Button/MatiereBtn'
import CrossBtn from '../components/Button/CrossBtn'
import TextInput from '../components/Text/TextInput'
import ValidateBtn from '../components/Button/ValidateBtn'

// Styled Components
const AddTaskWrapper = styled.View<{ color: any }>`
  padding: 20px;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(255, 255, 255, 1);
  width: 75vw;
  height: 70vh;
  border-radius: 3px;
  border-width: 2px;
  border-color: ${props => props.color.primary};
`

const TitleWrapper = styled.View`
  width: 100%;
  border: 1px solid yellowgreen;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`

const ModalTitle = styled.Text<{ color: any }>`
  justify-self: center;
  align-self: center;
  color: ${props => props.color.primary};
  font-size: 2em;
`

const BtnWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  border: 1px solid red;
  justify-content: space-around;
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

  const closeWindow = () => {
    return console.log('close window')
  }

  return (
    <AddTaskWrapper color={ProjectColors}>
      <TitleWrapper>
        <Text>{selectedSubject}</Text>
        <ModalTitle color={ProjectColors}>Ajoute un devoir à faire</ModalTitle>
        <CrossBtn closeWindow={() => closeWindow} />
      </TitleWrapper>
      <BtnWrapper>
        {subjectTheme.map((sub, index) => (
          <MatiereBtn
            subject={sub}
            handleChange={() => handleChange(index)}
            key={index}
          />
        ))}
      </BtnWrapper>
      <TextInput />
      <ValidateBtn />
    </AddTaskWrapper>
  )
}

export default AddTaskContainer
