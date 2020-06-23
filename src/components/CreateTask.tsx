// import React, { useState } from 'react'
// import { View } from 'react-native'
// import TextInput from './Text/TextInput'
// import ValidateBtn from './Button/ValidateBtn'

// function CreateTask() {
//   const [tasks, setTasks] = useState([{ text: 'DM de Math', key: '1' }])

//   const submitHandler = (text: string) => {
//     setTasks(prevTasks => {
//       return [{ text: text, key: Math.random().toString() }, ...prevTasks]
//     })
//   }

//   return (
//     <View>
//       <TextInput />
//       <ValidateBtn submitHandler={submitHandler} />
//     </View>
//   )
// }
// export default CreateTask
