import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import User from './src/context/User';
import RouteSwitch from './src/routes/RouteSwitch';

export default function App() {
  return (
    <User>
      <SafeAreaProvider>
      <NativeBaseProvider>
      <NavigationContainer>
         <RouteSwitch/>
      </NavigationContainer>
      </NativeBaseProvider>
      </SafeAreaProvider>
    </User>
  );
}