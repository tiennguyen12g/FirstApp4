import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import Logo from '../assests/Logo/Logo';
import Apple from '../assests/Icons/SocialMedia/apple';
import Facebook from '../assests/Icons/SocialMedia/facebook';
import Google from '../assests/Icons/SocialMedia/google';
import LogoShape from '../assests/Logo/LogoShape';
import Sign_In from '../App_Features/Account/Sign_In';
import LinearGradient from 'react-native-linear-gradient';
export default function Home() {
  const {colors} = useTheme();
  return (
    <View>
      <Text style={{color: colors.text}}>Homeijii</Text>
      <View
        style={{
          backgroundColor: colors.background,
          width: 100,
          height: 100,
        }}></View>
      <Text style={{color: colors.lightColor}}>Light Color</Text>
      <Text style={{color: colors.primaryColor}}>Primary Color</Text>
      <Text style={{color: colors.darkColor}}>Dark Color</Text>
      <Logo width={100} />
      {/* <LogoShape width={100} height={100} /> */}

      {/* <View style={{borderWidth:1}}>
      <Apple width={100} height={100}/>
      <Facebook width={100} height={100}/>
      <Google width={100} height={100}/>
      </View> */}
      <Sign_In />
      <View style={[styles.container]}>
        <LinearGradient
          colors={['#2262eb', '#d317e4']}
          start={{x: 0.3, y: 0}}
          end={{x: 0.7, y: 1}}
          style={[styles.borderGradient]}>
          <View style={styles.content}>
            <Text style={styles.buttonText}>Sign in with Facebook</Text>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  borderGradient: {
    borderRadius: 40, // Adjust the border radius as needed
    width: '80%',
    height: 80,
    padding: 10,
  },
  content: {
    height: 60,
    borderRadius: 30,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: 'white',
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
  },
});
