import React, { useState, useEffect } from 'react'
import styled from 'rn-css'

import { SubjectsInfo, ProjectColors } from '../theme/Infos'
import MatiereBtn from '../components/Button/MatiereBtn'
import CrossBtn from '../components/Button/CrossBtn'
import TextInput from '../components/Text/TextInput'
import AddBtn from '../components/Button/AddBtn'

// Styled Components
const AddTaskWrapper = styled.View<{ color: any }>`
  padding: 0px 20px;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(255, 255, 255, 1);
  width: 70vw;
  height: 65vh;
  border-radius: 3px;
  border-width: 3px;
  border-color: ${props => props.color};
`

const InfoWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`
const InfoText = styled.Text<{ color: string }>`
  color: ${props => props.color};
  font-size: 1.3em;
  font-weight: bold;
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
  justify-content: space-around;
`
// Variables for the state
const InitialState = [...SubjectsInfo]

const AddTaskContainer = () => {
  const [selectedSubject, setSelectedSub] = useState<string>('')
  const [subjectTheme, setSubjectTheme] = useState(InitialState)
  const [subjectColor, setSubjectColor] = useState<string>('')

  useEffect(() => {
    subjectTheme.map(sub => {
      if (sub.selected === true) {
        setSelectedSub(sub.label)
        setSubjectColor(sub.colors.border)
      }
    })
  }, [selectedSubject])

  const selectSubject = (nb: number) => {
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

  const addTask = () => {
    return console.log('add task')
  }

  return (
    <AddTaskWrapper
      color={subjectColor === '' ? ProjectColors.primary : subjectColor}
    >
      <InfoWrapper>
        <InfoText color={subjectColor === '' ? 'black' : subjectColor}>
          {selectedSubject}
        </InfoText>
        <CrossBtn closeWindow={closeWindow} />
      </InfoWrapper>
      <ModalTitle color={ProjectColors}>Ajoute un devoir à faire</ModalTitle>
      <BtnWrapper>
        {subjectTheme.map((sub, index) => (
          <MatiereBtn
            subject={sub}
            selectSubject={() => selectSubject(index)}
            key={index}
          />
        ))}
      </BtnWrapper>
      <TextInput placeholder="Écris ton devoir ici" />
      <AddBtn project={ProjectColors} addTask={addTask} />
    </AddTaskWrapper>
  )
}

export default AddTaskContainer
