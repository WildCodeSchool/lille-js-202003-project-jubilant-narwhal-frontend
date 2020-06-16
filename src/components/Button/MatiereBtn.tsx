import styled from 'rn-css'
import React, { useState } from 'react'
import { Text, View } from 'react-native'
const subjectArray = [
  'Français',
  'Maths',
  'Langues-Vivantes',
  'Physique-Chimie',
  'SVT',
  'Histoire-Géographie',
  'Sport'
]

const MatiereBtnStyle = styled.TouchableOpacity<{ color: string }>`
  background: ${(props) => props.color};
  justify-content: center;
  text-align:center;
  align-items: center;
  width: 100px;
  height: 50px;
  border: 2px solid black;
  pressduration: 0.3;
`

const MatiereBtn = () => {
  const [colorBackground, setColorBackground] = useState<string>('white')

  const BackgroundColors = () => {
    if (subjectArray[0]) { setColorBackground('red') } else if (subjectArray[1]) { setColorBackground('blue') } else if (subjectArray[2]) { setColorBackground('yellow') } else if (subjectArray[3]) { setColorBackground('pink') } else if (subjectArray[4]) { setColorBackground('green') } else if (subjectArray[5]) { setColorBackground('purple') }
  }

  return (
    <View>
      {subjectArray.map(sub => {
        return (<MatiereBtnStyle color={colorBackground}
          onPress={() => {
            BackgroundColors()
          }}

        >
          <Text>{sub}</Text>
        </MatiereBtnStyle>)
      })}</View>
  )
}
export default MatiereBtn
