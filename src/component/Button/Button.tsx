import React from 'react'
import { StyleSheet, Button, View } from 'react-native'

const CustomButton = () => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          console.log('toto')
        }}
        title="test"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
    borderColor: 'purple',
    borderRadius: 8,
    borderWidth: 1,
    width: 200,
    padding: 35,
    alignItems: 'center'
  }
})

export default CustomButton
