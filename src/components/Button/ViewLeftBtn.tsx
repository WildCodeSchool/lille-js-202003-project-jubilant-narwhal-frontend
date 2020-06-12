import React, { useState } from 'react'
import styled from 'rn-css'

const ViewBtn = styled.TouchableOpacity<{colors : string}>`
  background: ${props => props.colors};
  justify-content: center;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
  border: 1px solid #6E4BC4;
  border-radius: 5px 0px 0px 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const ViewText = styled.Text<{color : string}>`
    color:${props => props.color};
    font-weight: bold;
    font-size: 1.5em;
`

const ViewLeftBtn = () => {
  const [bkgColor, setBkgColor] = useState<string>('#6E4BC4')
  const [textColor, setTextColor] = useState<string>('white')

  const handleColors = () => {
    if (bkgColor === '#6E4BC4') {
      setBkgColor('white')
      setTextColor('#6E4BC4')
    } else {
      setBkgColor('#6E4BC4')
      setTextColor('white')
    }
  }

  return (
    <ViewBtn colors={bkgColor} onPress={() => {
      handleColors()
    }}>
      <ViewText color={textColor}>Semaine</ViewText>
    </ViewBtn>
  )
}

export default ViewLeftBtn
