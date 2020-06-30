import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'rn-css'

const SwitchTextStyled = styled.Text`
  width: 100px;
  height: 100px;
  display: inline-block;
`

const SwitchDayWeekButton = () => {
  const [viewDayWeek, setViewDayWeek] = useState<boolean>(false)

  const changeViewButton = () => {
    setViewDayWeek(!viewDayWeek)
  }
  return (
    <TouchableOpacity onPress={changeViewButton}>
      <SwitchTextStyled>{viewDayWeek ? 'semaine' : 'jour'} </SwitchTextStyled>
    </TouchableOpacity>
  )
}
export default SwitchDayWeekButton
