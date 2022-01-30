import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { Container, IconeContainer, Titulo } from './styled'

//icone
import Icone from '../../assets/svg/SetaDireita.svg'
import cores from '../../utils/style/cores'

type Props = {
    icone?: boolean,
    loading?: boolean,
    titulo:string,
    color:string,
    click?: ()=>void
}
export default function ButtonPrimary({icone,color,titulo,click,loading}:Props) 
{
    return (
        <Container activeOpacity={0.7} onPress={click}
        style={{backgroundColor:color}}>
           { icone &&
                <IconeContainer>
                    <Icone width={30} height={30}/>
                </IconeContainer>
           }
            {
            loading ?
            <ActivityIndicator size="large" color={cores.primarary60}/>
            :
            <Titulo>{titulo}</Titulo>
            }
        </Container>
    )
}
