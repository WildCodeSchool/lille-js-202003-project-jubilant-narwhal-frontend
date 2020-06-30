import React, { useState } from 'react'
import { Text, Button } from 'react-native'
import styled from 'rn-css'
import TaskCard from './TaskCard'

const ViewContainer = styled.View`
  padding: 35;
  align-items: center;
`

const InputWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20;
`
const InputBox = styled.TextInput`
  width: 200;
  border-color: purple;
  border-radius: 8;
  border-width: 2;
  padding-left: 8;
`

// Type of to do object
interface IToDo {
  text: string
  completed: boolean
}

const CreateTask = () => {
  const [value, setValue] = useState<string>('')
  const [toDoList, setToDos] = useState<IToDo[]>([])
  const [error, showError] = useState<boolean>(false)

  const addTask = (): void => {
    if (value.trim()) setToDos([...toDoList, { text: value, completed: false }])
    else showError(true)
    setValue('')
  }

  const removeTask = (index: number): void => {
    const newToDoList = [...toDoList]
    newToDoList.splice(index, 1)
    setToDos(newToDoList)
  }

  const completeTask = (index: number): void => {
    const newToDoList = [...toDoList]
    newToDoList[index].completed = !newToDoList[index].completed
    setToDos(newToDoList)
  }

  return (
    <ViewContainer>
      <Text>Je veux ajouter :</Text>
      <InputWrapper>
        <InputBox
          placeholder="Entrez vos devoirs à faire."
          value={value}
          onChangeText={e => {
            setValue(e)
            showError(false)
          }}
        />
        <Button title="Ajouter un devoir" onPress={addTask} />
      </InputWrapper>
      {error && <Text>Error: Input field is empty...</Text>}
      <Text>Un devoir :</Text>
      {toDoList.length === 0 ? (
        <Text>Pas de devoirs à faire.</Text>
      ) : (
        toDoList.map((toDo: IToDo, index: number) => (
          <TaskCard
            text={toDo.text}
            removeTask={() => removeTask(index)}
            key={index}
            isCompleted={toDo.completed}
            completeTask={() => completeTask(index)}
          />
        ))
      )}
    </ViewContainer>
  )
}

export default CreateTask
