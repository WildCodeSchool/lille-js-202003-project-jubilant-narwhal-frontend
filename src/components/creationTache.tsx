import React from 'react'
import { View, Text } from 'react-native'
import ValidateBtn from './Button/ValidateBtn'
import MatiereBtn from './Button/MatiereBtn'
import TextMatiere from './Text/TextMatiere'
import TextValidate from './Text/TextValidate'
import TextInput from './Text/TextInput'
import DayColumn from './DayColumn'
import FlecheDroite from './Button/FlecheDroiteBtn'

import styled from 'rn-css'
import SendBtn from './Button/SendBtn'
import ImageSendBtn from './ImagesBtn/ImageSendBtn'

const ViewMatière = styled.View`
  flex-direction: row;
  justify-content: space-around;
`

const CreationTache = () => {
  return (
    <View>
      <FlecheDroite />
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

      <SendBtn>
        <ImageSendBtn
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        />
      </SendBtn>
    </View>
  )
}

export default CreationTache
