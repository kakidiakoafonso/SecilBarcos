import React, { ReactNode } from 'react'
import { View, Text } from 'react-native'
import {Container, LeftContainer, Texto, Titulo} from './styled'
import { AntDesign ,SimpleLineIcons} from '@expo/vector-icons';

import Icon from '../../assets/svg/location.svg'
import cores from '../../utils/style/cores';


const Iconsize = 25
type Props = {
    tipo: "origin"| "destino",
}
export default function Selection({tipo='origin'}:Props) 
{
    return (
        <Container>
            {
            tipo==='origin'?
            <Icon width={Iconsize} height={Iconsize}/>
            :
            <SimpleLineIcons name='location-pin' size={25} color={cores.dark}/>
            }

            <Titulo>{tipo==='origin'? "Terminal de origem":"Terminal de chegada"}</Titulo>
            <Texto>ILHA DO MUSSULO</Texto>
            
        <LeftContainer>
            <AntDesign name={tipo==='origin'? 'arrowdown':'arrowup'} size={30} color={cores.dark}/>
        </LeftContainer>
        </Container>
    )
}
