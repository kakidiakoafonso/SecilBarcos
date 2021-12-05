import React from 'react'
import { View, Text } from 'react-native'
import { Container, IconeContainer, Titulo } from './styled'

//icone
import Icone from '../../assets/svg/SetaDireita.svg'

type Props = {
    icone?: boolean,
    titulo:string,
    color:string,
    click?: ()=>void
}
export default function ButtonPrimary({icone,color,titulo,click}:Props) 
{
    return (
        <Container activeOpacity={0.7} onPress={click}
        style={{backgroundColor:color}}>
           { icone &&
                <IconeContainer>
                    <Icone width={30} height={30}/>
                </IconeContainer>
           }
            <Titulo>{titulo}</Titulo>
        </Container>
    )
}
