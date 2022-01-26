import { createDrawerNavigator } from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ResetPassword from '../pages/ResetPassword/ResetPassword'
import Reserva from '../pages/Bilhetica/Bilhetica';
import Bilhetica from '../pages/Reserva/Reserva';
import Rotas from '../pages/Rotas/Rotas';
import cores from '../utils/style/cores';
import {Left, Right } from './styled';

import DraweCustomizado from '../components/DrawerContent/DrawerContent'


//Icons

import MenuIcon  from '../assets/svg/menu.svg'
import UserIcon  from '../assets/svg/User.svg'
import { useNavigation } from '@react-navigation/core';
import { View } from 'react-native';
import Perfil from '../pages/Perfil/Perfil';
import Detalhe from '../pages/DetalhesRota/Detalhe';
import { color } from 'react-native-reanimated';

const Stack = createNativeStackNavigator()
const Drawer  = createDrawerNavigator() 

export default function Route() 
{
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Drawer" component={DrawerContainer}/>
            <Stack.Screen name="Perfil" component={Perfil}/>
            <Stack.Screen name="Detalhe" component={Detalhe} options={{
                headerShown:true,headerShadowVisible:false,
                headerTitleStyle:{color:cores.grey},
                headerBackTitleVisible:false,
                headerTransparent:true             
            }}/>
        </Stack.Navigator>
    )
}
export function DrawerContainer() 
{
    return (
        <Drawer.Navigator screenOptions={{headerShown:false}}
            drawerContent={({state})=><DraweCustomizado state={state}/>}
        
        >
            <Drawer.Screen name="Home" component={MyTabs}/>
            <Drawer.Screen name="Reset" component={ResetPassword}/>
        </Drawer.Navigator>
    )
}



const Tab = createMaterialTopTabNavigator();

function MyTabs() 
{
    const nav = useNavigation()
  return (
      <>
      <Left onPress={()=>nav.openDrawer()}>
            <MenuIcon width={30} height={30} />
      </Left>
      <Right onPress={()=>nav.navigate('Perfil')}>
            <UserIcon width={25} height={25} fill={cores.primarary}/>
      </Right>
    <Tab.Navigator initialRouteName='Bilhetica'
    
        screenOptions={{
            tabBarActiveTintColor:cores.primarary,
            tabBarIndicatorStyle:
            {
                backgroundColor:cores.primarary80,
                width: 10,height:13,marginLeft:'10%',
            },
            tabBarContentContainerStyle:{paddingTop:10,width:80,
                backgroundColor:cores.primarary40},
            tabBarStyle:{width:'80%',alignSelf:'center',},
            tabBarItemStyle:{}
            
        }}
    >
      <Tab.Screen name="Bilhetica" component={Bilhetica} />
      <Tab.Screen name="Reserva" component={Reserva} />
      <Tab.Screen name="Rotas" component={Rotas} />
    </Tab.Navigator>
    </>
  );
}