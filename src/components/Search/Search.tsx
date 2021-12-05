import React,{useState} from 'react'
import { View, Text } from 'react-native'
import SearchIcon from '../../assets/svg/search.svg'
import {Container,TextInput} from './styled'

export default function Search() 
{
    const [texto, settexto] = useState<string>('')
    return (
        <Container>
            <SearchIcon width={40} heigth={40}/>
            <TextInput
                placeholder="Pesquisar rotas"
                value={texto}
                onChangeText={settexto}
            />
        </Container>
    )
}
