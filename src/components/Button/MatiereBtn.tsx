import styled from 'rn-css'
import React from 'react'
import { Text } from 'react-native'

const MatiereBtnStyle = styled.TouchableOpacity<{ color: string }>`
  background: ${props => props.color};
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 100px;
  height: 50px;
  border: 2px solid black;
`

type Props = {
  subject: any
  handleChange: any
}

const MatiereBtn = ({ subject, handleChange }: Props) => {
  return (
    <MatiereBtnStyle color={subject.color} onPress={handleChange}>
      <Text>{subject.label}</Text>
    </MatiereBtnStyle>
  )
}
export default MatiereBtn
