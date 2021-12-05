import React from 'react'
import { View, Text } from 'react-native'
import {Container, Content, TopContainer,
UserContainer,Nome,Numero, ContentItems, ItemIcon} from './styled'

//Svg
import UserIcon from '../../assets/svg/User.svg'

const sombra = {shadowColor: "#000",
shadowOffset: {
    width: 0,
    height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5}

export default function Perfil() {
    return (
       <Container>
           <TopContainer>

           <UserContainer activeOpacity={0.7}>
                <UserIcon width={40} height={40} fill="#fff"/> 
                <Nome>Kakidiako Afonso</Nome>
                <Numero>945176405</Numero>
            </UserContainer>

            </TopContainer>
           <Content style={sombra}>

            <ContentItems >
                <ItemIcon>
                    <UserIcon width={25} height={25} fill="#fff"/> 
                </ItemIcon>
            </ContentItems>

           </Content>

       </Container>
    )
}
