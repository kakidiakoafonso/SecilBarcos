import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Signinoute from './src/routes/signin.route';
import Route from './src/routes/route';

export default function App() {
  return (
    <NavigationContainer>
        <Signinoute/>
        {/* <Route/> */}
    </NavigationContainer>
  );
}