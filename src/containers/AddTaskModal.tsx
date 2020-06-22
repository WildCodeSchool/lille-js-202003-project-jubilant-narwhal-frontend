import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

import ColorsSubjects from '../theme/Colors'
import MatiereBtn from '../components/Button/MatiereBtn'

const InitialState = [...ColorsSubjects]

const AddTaskModal = () => {
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
    <View>
      <Text>{selectedSubject}</Text>
      {subjectTheme.map((sub, index) => (
        <MatiereBtn
          subject={sub}
          handleChange={() => handleChange(index)}
          key={index}
        />
      ))}
    </View>
  )
}

export default AddTaskModal
