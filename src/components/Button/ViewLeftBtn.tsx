import React, { useState } from 'react'
import styled from 'rn-css'

const ViewBtn = styled.TouchableOpacity<{ colors: string }>`
  background: ${props => props.colors};
  justify-content: center;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
  border: 1px solid 'rgba(128,0,128,1)';
  border-radius: 5px 0px 0px 5px;
`

const ViewText = styled.Text<{ color: string }>`
  color: ${props => props.color};
  font-weight: bold;
  font-size: 1.5em;
`

const ViewLeftBtn = () => {
  const [bkgColor, setBkgColor] = useState<string>('rgba(128,0,128,1)')
  const [textColor, setTextColor] = useState<string>('rgba(255,255,255,1)')

  const handleColors = () => {
    if (bkgColor === 'rgba(128,0,128,1)') {
      setBkgColor('rgba(255,255,255,1)')
      setTextColor('rgba(128,0,128,1)')
    } else {
      setBkgColor('rgba(128,0,128,1)')
      setTextColor('rgba(255,255,255,1)')
    }
  }

  return (
    <ViewBtn
      colors={bkgColor}
      onPress={() => {
        handleColors()
      }}
    >
      <ViewText color={textColor}>Semaine</ViewText>
    </ViewBtn>
  )
}

export default ViewLeftBtn
