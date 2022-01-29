import React, { ReactNode } from 'react'
import { View, Text } from 'react-native'
import {Container, LeftContainer, Texto, Titulo} from './styled'
import { AntDesign ,SimpleLineIcons} from '@expo/vector-icons';

import Icon from '../../assets/svg/location.svg'
import cores,{sombra} from '../../utils/style/cores';


const Iconsize = 25
type Props = {
    tipo: "origin"| "destino",
    onPress: ()=>void
}

export default function Selection({tipo='origin',onPress}:Props) 
{
    return (
        <Container style={sombra} activeOpacity={0.7} onPress={onPress}>
            {
            tipo==='origin'?
            <Icon width={Iconsize} height={Iconsize}/>
            :
            <SimpleLineIcons name='location-pin' size={Iconsize} color={cores.dark}/>
            }

            <Titulo>{tipo==='origin'? "Terminal de origem":"Terminal de chegada"}</Titulo>
            <Texto>ILHA DO MUSSULO</Texto>
            
        <LeftContainer>
            <AntDesign name={tipo==='origin'? 'arrowdown':'arrowup'} size={Iconsize} color={cores.dark}/>
        </LeftContainer>
        </Container>
    )
}
