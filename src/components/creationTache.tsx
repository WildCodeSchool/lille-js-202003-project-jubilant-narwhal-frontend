import React from 'react'
import { View, Text } from 'react-native'
import ValidateBtn from './Button/ValidateBtn'
import MatiereBtn from './Button/MatiereBtn'
import TextMatiere from './Text/TextMatiere'
import TextValidate from './Text/TextValidate'
import TextInput from './Text/TextInput'
import DayColumn from './DayColumn'
import styled from 'rn-css'
import SendBtn from './Button/SendBtn'

const ViewMatière = styled.View`
  flex-direction: row;
  justify-content: space-around;
`

const CreationTache = () => {
  return (
    <View>
      <DayColumn />

      <ViewMatière>
        <MatiereBtn
          onPress={() => {
            console.log('fr')
          }}
        >
          <TextMatiere>Français</TextMatiere>
        </MatiereBtn>
        <MatiereBtn
          onPress={() => {
            console.log('math')
          }}
        >
          <Text>Mathématiques</Text>
        </MatiereBtn>
        <MatiereBtn
          onPress={() => {
            console.log('angl')
          }}
        >
          <Text>Anglais</Text>
        </MatiereBtn>
        <MatiereBtn
          onPress={() => {
            console.log('hist')
          }}
        >
          <Text>Histoire</Text>
        </MatiereBtn>
      </ViewMatière>
      <TextInput>écris ton devoir ici</TextInput>
      <ValidateBtn
        onPress={() => {
          console.log('env')
        }}
      >
        {' '}
        <TextValidate>Ajouter!</TextValidate>
      </ValidateBtn>

      <SendBtn />
    </View>
  )
}

export default CreationTache
