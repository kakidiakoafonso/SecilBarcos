import React from 'react'
import { View, Text } from 'react-native'
import { BackButton, Container, Titulo } from './styled'


//Icones 
import BackIcone from '../../assets/svg/IconsArrowsPreviuos.svg'
import { useNavigation } from '@react-navigation/core'
type Props = {
    titulo:string
}
export default function Header({titulo}:Props) 
{
    const nav = useNavigation()
    return (
        <Container>
            <BackButton onPress={()=>nav.goBack()}>
                <BackIcone width={20} height={20}/>
            </BackButton>
            <Titulo>{titulo}</Titulo>
        </Container>
    )
}
