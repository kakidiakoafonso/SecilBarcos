import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Signinoute from './src/routes/signin.route';
import Route from './src/routes/route';
import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
    <NativeBaseProvider>
    <NavigationContainer>
        {/* <Signinoute/> */}
        <Route/>
    </NavigationContainer>
    </NativeBaseProvider>
    </SafeAreaProvider>
  );
}