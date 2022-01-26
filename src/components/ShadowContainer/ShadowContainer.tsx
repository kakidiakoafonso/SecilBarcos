import React,{ReactNode} from 'react'
import { TouchableOpacityProps } from 'react-native'
import cores, { sombra } from '../../utils/style/cores'
import { Container,TouchableOpacity} from './styled'

type Props =  TouchableOpacityProps & {
    children: ReactNode,
    Icone?: any,
    RigthIcone?: any,
    IconeClick?: ()=>void,
    size?: number
}
export default function ShadowContainer({size=30,Icone,RigthIcone,
    children,IconeClick,...rest}:Props) 
{
    const tamanho = size
    return (
        <Container style={sombra}>
            {Icone && 
            <TouchableOpacity onPress={IconeClick} {...rest}>
                <Icone width={tamanho} height={tamanho}/>
            </TouchableOpacity>}
            {children}

            {RigthIcone && <RigthIcone/>}
        </Container>
    )
}
