import * as React from 'react';
import AppNavigator from './src/AppNavigator';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AppNavigator />
    </SafeAreaView>
  );
}
