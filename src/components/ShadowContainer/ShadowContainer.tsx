import React,{ReactNode} from 'react'
import { TouchableOpacity,TouchableOpacityProps } from 'react-native'
import cores, { sombra } from '../../utils/style/cores'
import { Container} from './styled'

type Props =  TouchableOpacityProps & {
    children: ReactNode,
    Icone?: any
    IconeClick?: ()=>void,
    size?: number
}
export default function ShadowContainer({size=30,Icone,children,IconeClick,...rest}:Props) 
{
    const tamanho = size
    return (
        <Container style={sombra}>
            {children}
            {Icone && 
            <TouchableOpacity onPress={IconeClick} {...rest}>
                <Icone width={tamanho} height={tamanho}/>
            </TouchableOpacity>}
        </Container>
    )
}
