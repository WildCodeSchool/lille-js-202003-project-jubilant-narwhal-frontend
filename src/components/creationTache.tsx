import React from 'react'
import { View } from 'react-native'
import ValidateBtn from './Button/ValidateBtn'
import MatiereBtn from './Button/MatiereBtn'
import styled from 'rn-css'

const TextEnter = styled.TextInput`
  background: yellow;
`

export interface Props {
  TextEnter: string;
}
const CreationTache = () => {
  return (
    <View>
      <MatiereBtn
        onPress={() => {
          console.log('fr')
        }}
        title="français"
      />
      <MatiereBtn
        onPress={() => {
          console.log('math')
        }}
        title="math"
      />
      <MatiereBtn
        onPress={() => {
          console.log('angl')
        }}
        title="anglais"
      />
      <MatiereBtn
        onPress={() => {
          console.log('hist')
        }}
        title="histoire"
      />
      <TextEnter placeholder="Ecris ton devoir ici" />
      <ValidateBtn
        onPress={() => {
          console.log('env')
        }}
        title="envoyer"
      />
    </View>
  )
}

export default CreationTache
