import { useNavigation } from '@react-navigation/native'
import React from 'react'
import Exchange from "../../assets/svg/exchange.svg"
import Search from '../../components/Search/Search'
import { ButtonVerTodos, Container, Content, Item, 
    ItemSeparator, Texto, TextoValue, TextoVerTodos,
FlatList,FlatListContainer } from './styled'

export default function Rotas() {
    const {navigate} = useNavigation()
    return (
        <Container style={{flex:1}}>
            <Search/>
        <FlatListContainer>

            <FlatList
                data={[1,2,3,4,5,6,7,8,9,10]}
                keyExtractor={e=>String(e)}
                renderItem={()=>
                    <Item activeOpacity={0.7} onPress={()=>navigate("Detalhe")}>
                        <Content>
                            <Texto>De</Texto>
                            <TextoValue>Ilha de Luanda</TextoValue>
                            <Exchange width={20} height={20}/>
                            <Texto>Para</Texto>
                            <TextoValue>Praia de Cacuaco</TextoValue>
                        </Content>
        
                        <ItemSeparator/>
        
                        <Content style={{justifyContent:'flex-start'}}>
                            <Texto style={{marginRight:10}}>Data</Texto>
                            <TextoValue>11/03/2022</TextoValue>
                        </Content>
                    </Item>
                
                }
            />
        </FlatListContainer>
            
           
           

            <ButtonVerTodos activeOpacity={0.4}>
                <TextoVerTodos>
                    VER TODOS
                </TextoVerTodos>
            </ButtonVerTodos>
        </Container>
    )
}
