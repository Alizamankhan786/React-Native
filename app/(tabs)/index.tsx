import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <>
    <View style={{
      backgroundColor: "gray",
      justifyContent: "center",
      alignItems: "center",
      flex: 1
    }}>
      <Text style={{
        fontSize: 30,
        color: "white",
        fontFamily: "bold"
      }}>Home</Text>

      <Link style={{
        fontSize: 30,
        color: "white",
        marginTop: 10,
      }} href={`about`}>About!</Link>

      <Link style={{
        fontSize: 30,
        color: "white",
        marginTop: 10,
      }} href={`contact`}>Contact!</Link>

      <Link style={{
        fontSize: 30,
        color: "white",
        marginTop: 10,
      }} href={`services`}>Services!</Link>

    </View>
    </>
  )
}

export default index