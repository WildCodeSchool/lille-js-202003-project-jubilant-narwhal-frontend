import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'rn-css'

const PenBtnStyle = styled.Image`
  width: 1em;
  height: 1em;
  border-radius: 25%;
`
// Props type
type Props = {
  removeTask: any
}

const PenBtn = ({ removeTask }: Props) => {
  return (
    <TouchableOpacity onPress={() => ({ removeTask })}>
      <PenBtnStyle
        source={require('../../../assets/Images/pencil-circle.svg')}
      />
    </TouchableOpacity>
  )
}
export default PenBtn
