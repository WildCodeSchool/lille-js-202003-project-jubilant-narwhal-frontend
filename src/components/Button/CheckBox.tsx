import React, { useState } from 'react'
import { CheckBox, StyleSheet } from 'react-native'
// import styled from "rn-css";

const styles = StyleSheet.create({
  checkbox: {
    alignSelf: 'center',
    width: 30,
    height: 30,
    checkedColor: 'red',
    uncheckedColor: 'yellow'
  }
})
const Checkbox = () => {
  const [isSelected, setSelection] = useState(false)

  return (
    <CheckBox
      value={isSelected}
      onValueChange={setSelection}
      style={styles.checkbox}
    />
  )
}

export default Checkbox
