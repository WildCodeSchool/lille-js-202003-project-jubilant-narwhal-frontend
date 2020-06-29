import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'rn-css'

// Styled components
const CrossImg = styled.Image`
  width: 1em;
  height: 1em;
`

// Props type
type Props = {
  closeWindow: any
}

const CrossBtn = ({ closeWindow }: Props) => {
  return (
    <TouchableOpacity onPress={closeWindow}>
      <CrossImg source={require('../../../assets/Images/Cross.svg')} />
    </TouchableOpacity>
  )
}
export default CrossBtn
