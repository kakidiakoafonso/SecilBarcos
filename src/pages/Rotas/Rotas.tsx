import React from 'react'
import Exchange from "../../assets/svg/exchange.svg"
import Search from '../../components/Search/Search'
import { ButtonVerTodos, Container, Content, Item, ItemSeparator, Texto, TextoValue, TextoVerTodos } from './styled'

export default function Rotas() {
    return (
        <Container style={{flex:1}}>
            <Search/>

            <Item activeOpacity={0.7}>
                <Content>
                    <Texto>De</Texto>
                    <TextoValue>Ilha de Luanda</TextoValue>
                    <Exchange width={20} height={20}/>
                    <Texto>Para</Texto>
                    <TextoValue>Praia de Cacuaco</TextoValue>
                </Content>

                <ItemSeparator/>

                <Content style={{justifyContent:'flex-start'}}>
                    <Texto style={{marginRight:10}}>De</Texto>
                    <TextoValue>Em qualquer hora</TextoValue>
                </Content>
            </Item>
            <Item activeOpacity={0.7}>
                <Content>
                    <Texto>De</Texto>
                    <TextoValue>Ilha de Luanda</TextoValue>
                    <Exchange width={20} height={20}/>
                    <Texto>Para</Texto>
                    <TextoValue>Praia de Cacuaco</TextoValue>
                </Content>

                <ItemSeparator/>

                <Content style={{justifyContent:'flex-start'}}>
                    <Texto style={{marginRight:10}}>De</Texto>
                    <TextoValue>Em qualquer hora</TextoValue>
                </Content>
            </Item>
            <Item activeOpacity={0.7}>
                <Content>
                    <Texto>De</Texto>
                    <TextoValue>Ilha de Luanda</TextoValue>
                    <Exchange width={20} height={20}/>
                    <Texto>Para</Texto>
                    <TextoValue>Praia de Cacuaco</TextoValue>
                </Content>

                <ItemSeparator/>

                <Content style={{justifyContent:'flex-start'}}>
                    <Texto style={{marginRight:10}}>De</Texto>
                    <TextoValue>Em qualquer hora</TextoValue>
                </Content>
            </Item>

            <ButtonVerTodos activeOpacity={0.4}>
                <TextoVerTodos>
                    VER TODOS
                </TextoVerTodos>
            </ButtonVerTodos>
        </Container>
    )
}
