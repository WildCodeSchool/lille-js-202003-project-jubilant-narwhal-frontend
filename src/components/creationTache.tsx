import React from 'react'
import { View, Text } from 'react-native'
import ValidateBtn from './Button/ValidateBtn'
import MatiereBtn from './Button/MatiereBtn'
import TextMatiere from './Text/TextMatiere'
import TextValidate from './Text/TextValidate'
import styled from 'rn-css'

const TextEnter = styled.TextInput`
  background: yellowgreen;
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  border: 2px solide black;
`
const ViewMatière = styled.View`
  flex-direction: row;
  justify-content: space-around;
`
const CreationTache = () => {
  return (
    <View>
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
      <TextEnter placeholder="Ecris ton devoir ici" />
      <ValidateBtn
        onPress={() => {
          console.log('env')
        }}
      >
        {' '}
        <TextValidate>Ajouter!</TextValidate>
      </ValidateBtn>
    </View>
  )
}

export default CreationTache
