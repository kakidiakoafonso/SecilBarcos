import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Login from '../pages/Login/Login'
import ResetPassword from '../pages/ResetPassword/ResetPassword'
import SignUp from '../pages/SignUp/SignUp'
import Splash from '../pages/Splash/Splash'

const {Navigator,Screen}= createNativeStackNavigator()

export default function Signinoute() 
{
    return (
        <Navigator screenOptions={{headerShown:false}}>
            <Screen name="Splash" component={Splash}/>
            <Screen name="Login" component={Login}/>
            <Screen name="SignUp" component={SignUp}/>
            <Screen name="Reset" component={ResetPassword}/>
        </Navigator>
    )
}
