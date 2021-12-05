import React from 'react'
import {Container, Item, Nome, Numero, Texto, UserContainer} from './styled'
import UserIcon from '../../assets/svg/User.svg'
import Barco from '../../assets/svg/boat.svg'
import Location from '../../assets/svg/location.svg'
import Agencias from '../../assets/svg/home.svg'
import Carga from '../../assets/svg/unkown.svg'
import Verificacao from '../../assets/svg/check-outline.svg'
import FAQ from '../../assets/svg/question.svg'
import Feedback from '../../assets/svg/message.svg'
import Sobre from '../../assets/svg/question-doted.svg'
import cores from '../../utils/style/cores'
const size = 30

type Props ={
    state:any
}
export default function DrawerContent({state}:Props) 
{
    console.log(state);
    
    return (
        <Container>
            <UserContainer activeOpacity={0.7}>
                <UserIcon width={60} height={60} fill={"#fff"}/> 
                <Nome>Kakidiako Afonso</Nome>
                <Numero>945176405</Numero>
            </UserContainer>

            <Item>
                <Barco width={size} height={size}/> 
                <Texto>Reserva</Texto>
            </Item>
            <Item>
                <Location width={size} height={size}/> 
                <Texto>Terminais</Texto>
            </Item>
            <Item>
                <Agencias width={size} height={size}/> 
                <Texto>Agencias</Texto>
            </Item>
            <Item>
                <Carga width={size} height={size}/> 
                <Texto>Carga</Texto>
            </Item>
            <Item>
                <Verificacao width={size} height={size}/> 
                <Texto>Verificao</Texto>
            </Item>
            <Item>
                <FAQ width={size} height={size}/> 
                <Texto>FAQ</Texto>
            </Item>
            <Item>
                <Feedback width={size} height={size}/> 
                <Texto>Enviar feedback</Texto>
            </Item>
            <Item>
                <Sobre width={size} height={size}/> 
                <Texto>Sobre nos</Texto>
            </Item>
        </Container>
    )
}
