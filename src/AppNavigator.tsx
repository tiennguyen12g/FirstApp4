import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NumberKeyBoard from './App_Features/App_Password/NumberKeyBoard';
import PinAndFingerprint from './App_Features/App_Password/PinAndFingerprint';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from './App_Page/Home';
import Earning from './App_Page/Earning';
import Profile from './App_Page/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Wallet from './App_Page/Wallet';
import MyTheme from './Theme/Themes';

// const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();
function AppNavigator() {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <NavigationContainer theme={MyTheme}>
      {authenticated ? (
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({focused, color, size}) => (
                <AntDesign name="home" size={size} color={color} />
              ),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Earning"
            component={Earning}
            options={{
              tabBarLabel: 'Earning',
              tabBarIcon: ({focused, color, size}) => (
                <MaterialCommunityIcons
                  name="finance"
                  size={size}
                  color={color}
                />
              ),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Wallet"
            component={Wallet}
            options={{
              tabBarLabel: 'Wallet',
              tabBarIcon: ({focused, color, size}) => (
                <Entypo name="wallet" size={size} color={color} />
              ),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({focused, color, size}) => (
                <Entypo name="menu" size={size} color={color} />
              ),
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      ) : (
        <PinAndFingerprint setAuthenticated={setAuthenticated} />
      )}
    </NavigationContainer>
  );
}

export default AppNavigator;
