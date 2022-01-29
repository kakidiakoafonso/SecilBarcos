import { useNavigation } from '@react-navigation/native'
import React,{useState} from 'react'
import { View, Text } from 'react-native'
import SearchIcon from '../../assets/svg/search.svg'
import {Container,TextInput} from './styled'

type Props = {
    redirectSearch?:boolean
    placeholder:string
}
export default function Search({redirectSearch,placeholder}:Props) 
{
    const nav = useNavigation()
    const [texto, settexto] = useState<string>('')
    return (
        <Container>
            <SearchIcon width={40} heigth={40}/>
            <TextInput
                placeholder={placeholder}
                value={texto}
                onChangeText={settexto}
                onFocus={()=> redirectSearch? nav.navigate('Rotas'): null}
            />
        </Container>
    )
}
