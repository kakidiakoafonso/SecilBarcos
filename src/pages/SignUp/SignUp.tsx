import React ,{useState} from 'react'
import { View, Text, } from 'react-native'
import ShadowContainer from '../../components/ShadowContainer/ShadowContainer'
import { Container,ContentText,TextInfo,Titulo,
    TextInput, Content, TextCriarConta,ContentCenter } from './styled'

//Icone 
import IconAgenda from '../../assets/svg/Date.svg'
import cores from '../../utils/style/cores'
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary'
import { TouchableOpacity } from 'react-native-gesture-handler'
import KeyBoardAvoidWrapper from '../../components/KeyBoardAvoidWrapper/KeyBoardAvoidWrapper'
import Header from '../../components/HeaderSign/Header'
import { Foundation,AntDesign } from '@expo/vector-icons';

export default function SignUp() 
{
    const [showPassword, setshowPassword] = useState<boolean>(true)
    return (
        <KeyBoardAvoidWrapper>
        <Container>
            <Header titulo="Cadastramento"/>
            <Content>

                <ContentText>
                    <Titulo>Criar sua conta!</Titulo>
                </ContentText>

                        <ShadowContainer 
                        Icone={()=><AntDesign name="user" size={24} color={cores.primarary40} />}
                            activeOpacity={1}>
                            <TextInput  placeholder={'Nome completo'}
                                placeholderTextColor={cores.primarary}
                                
                                />
                        </ShadowContainer>
                        
                        <ShadowContainer activeOpacity={0.7}
                        Icone={()=><Foundation name="telephone" size={24} color={cores.primarary40}/>}
                            IconeClick={()=> setshowPassword(!showPassword)}>
                            <TextInput  placeholder={'Telefone'}
                                placeholderTextColor={cores.primarary}
                                
                                />
                        </ShadowContainer>
                        
                        <ShadowContainer 
                            Icone={()=><AntDesign name="idcard" size={24} color={cores.primarary40}/>}
                            activeOpacity={1}>
                            <TextInput  placeholder={'Numero do BI'}
                                placeholderTextColor={cores.primarary}
                                
                                />
                        </ShadowContainer>

                        <ShadowContainer size={22} activeOpacity={0.7}
                            Icone={()=><AntDesign name="lock" size={24} color={cores.primarary40}/>}
                            IconeClick={()=> setshowPassword(!showPassword)}>
                            <TextInput  placeholder={'Senha'}
                                placeholderTextColor={cores.primarary}
                                secureTextEntry={showPassword}
                                
                                />
                        </ShadowContainer>

                        <ShadowContainer  activeOpacity={0.7}
                            Icone={()=><AntDesign name="lock" size={24} color={cores.primarary40}/>}
                            IconeClick={()=> setshowPassword(!showPassword)}>
                            <TextInput  placeholder={'Cidade, Municipio, Bairro'}
                                placeholderTextColor={cores.primarary}                                
                                />
                        </ShadowContainer>

                <ButtonPrimary titulo="CONTINUE" color={cores.primarary80}
                    click={()=> console.log('aa')}
                />
            
            </Content>

        </Container>
        </KeyBoardAvoidWrapper>
    )
}
