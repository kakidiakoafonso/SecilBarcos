import { createDrawerNavigator } from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useContext } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Tooltip, Text, colors } from 'react-native-elements';

import ResetPassword from '../pages/ResetPassword/ResetPassword'
import Reserva from '../pages/Bilhetica/Bilhetica';
import Bilhetica from '../pages/Reserva/Reserva';
import Rotas from '../pages/Rotas/Rotas';
import cores, { sombra } from '../utils/style/cores';
import {Left, Right, Titulo } from './styled';
import * as S from '../pages/Reserva/styled';

import DraweCustomizado from '../components/DrawerContent/DrawerContent'


//Icons

import MenuIcon  from '../assets/svg/menu.svg'
import UserIcon  from '../assets/svg/User.svg'
import { useNavigation } from '@react-navigation/core';
import { Dimensions, View } from 'react-native';
import Perfil from '../pages/Perfil/Perfil';
import Detalhe from '../pages/DetalhesRota/Detalhe';
import { color } from 'react-native-reanimated';
import Agencia from '../pages/Agencia/Agencia';
import { MaterialIcons } from '@expo/vector-icons';
import { UserContext } from '../context/User';

const Stack = createNativeStackNavigator()
const Drawer  = createDrawerNavigator() 

export default function Route() 
{
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Drawer" component={DrawerContainer}/>
            <Stack.Screen name="Agencia" component={Agencia} 
            options={{
                headerShown:true,headerShadowVisible:false,
                headerTitleStyle:{color:cores.grey},
                headerBackTitleVisible:false,
                headerTransparent:true,headerTitleAlign:'center',
                title:"Agências"          
            }}
            />
            <Stack.Screen name="Perfil" component={Perfil}/>
            <Stack.Screen name="Detalhe" component={Detalhe} options={{
                headerShown:true,headerShadowVisible:false,
                headerTitleStyle:{color:cores.grey},
                headerBackTitleVisible:false,
                headerTransparent:true,headerTitleAlign:'center'             
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
const focusedStyle = {color:cores.primarary,borderBottomWidth:2,borderBottomColor:cores.primarary80}
const unfocusedStyle = {color:cores.grey}
function MyTabs() 
{
    const perfilClicked = () => {
        settooltipVisible(false)
        nav.navigate('Perfil')
    }
    const nav = useNavigation()
    const {setlogado} = useContext(UserContext)
    const [tooltipVisible, settooltipVisible] = React.useState(false);
  return (
      <>
      <Left onPress={()=>nav.openDrawer()}>
            <MenuIcon width={20} height={20} />
      </Left>
      <Right>
            
            <Tooltip
                        popover={<S.PopOver style={{paddingRight:13}}>
                                    <S.PopOverButton onPress={perfilClicked}>
                                        <UserIcon width={20} height={20} fill={cores.primarary}/>
                                        <S.PopOverText>Perfil</S.PopOverText>
                                    </S.PopOverButton>
                                    <S.PopOverButton onPress={()=>setlogado(false)}>
                                        <MaterialIcons name="logout" size={24} color={cores.primarary} />
                                        <S.PopOverText>Sair</S.PopOverText>
                                    </S.PopOverButton>
                                </S.PopOver>}
                        pointerColor={'rgba(0,0,0,0.6)'}
                        withPointer={true}
                        overlayColor={"rgba(0,0,0,0)"}
                        width={150}
                        // visible={tooltipVisible}
                        containerStyle={[{height:70,backgroundColor:'#fff'},sombra]}
                        >
                        <UserIcon width={20} height={20} fill={cores.primarary}/>
                    </Tooltip>
      </Right>
    <Tab.Navigator initialRouteName='Reserva'
    
        screenOptions={{
            tabBarActiveTintColor:cores.primarary,
            tabBarIndicatorStyle:
            {
                backgroundColor:cores.primarary80,
                width: 10,height:13,marginLeft:'10%',
            },
            tabBarContentContainerStyle:{paddingTop:10,width:80,
                backgroundColor:cores.primarary40, justifyContent:'center'},
            tabBarStyle:{width:'100%',alignSelf:'center',},
            tabBarItemStyle:{width: Dimensions.get('window').width * 0.28,
            alignSelf:'center'}
            
        }}
    >
      <Tab.Screen name="Bilhetica" component={Bilhetica} 
        options={{tabBarLabel:(({focused})=>
      <Titulo style={focused?focusedStyle:unfocusedStyle}>Reservas</Titulo>)}}/>

      <Tab.Screen name="Reserva" component={Reserva} 
        options={{tabBarLabel:(({focused})=>
      <Titulo style={focused?focusedStyle:unfocusedStyle}>Bilhetica</Titulo>)}}/>

      <Tab.Screen name="Rotas" component={Rotas} 
        options={{tabBarLabel:(({focused})=>
      <Titulo style={focused?focusedStyle:unfocusedStyle}>Rotas</Titulo>)}}/>
    </Tab.Navigator>
    </>
  );
}