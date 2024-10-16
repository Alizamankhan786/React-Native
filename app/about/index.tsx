import { View, Text } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"

    }}>
      <Text style={{
        color: "white",
        fontSize: 30
      }}>About</Text>
    </View>
  )
}

export default About