import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import Ellip_Sign_In from '../../assests/Icons/SocialMedia/React-Native/Ellip_Sign_In'
import Logo from '../../assests/Logo/Logo'
const {width,height} = Dimensions.get('screen')
export default function Sign_In() {
  return (
    <View style={{justifyContent:"center",alignItems:"center"}}>
      <Ellip_Sign_In width={width} />
      <View style={{position:"absolute"}}><Logo /></View>
    </View>
  )
}

const styles = StyleSheet.create({})