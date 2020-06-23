import styled from 'rn-css'
import React from 'react'

// Styled components
const MatiereBtnStyle = styled.TouchableOpacity<{ colors: any }>`
  background: ${props => props.colors.background};
  justify-content: center;
  text-align: center;
  align-items: center;
  border-width: 2px;
  border-color: ${props => props.colors.border};
  border-radius: 5px;
  padding: 10px 15px;
  margin: 10px;
  flex: 1;
`

const TextBtn = styled.Text`
  font-weight: bold;
  font-size: 0.8em;
  letter-spacing: 0.05em;
  line-height: 1.3em;
`

// Props type
type Props = {
  subject: any
  handleChange: any
}

const MatiereBtn = ({ subject, handleChange }: Props) => {
  return (
    <MatiereBtnStyle colors={subject.colors} onPress={handleChange}>
      <TextBtn>{subject.label}</TextBtn>
    </MatiereBtnStyle>
  )
}
export default MatiereBtn
