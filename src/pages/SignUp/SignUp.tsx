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
                            activeOpacity={1}>
                            <TextInput  placeholder={'Telefone'}
                                placeholderTextColor={cores.primarary}
                                
                                />
                        </ShadowContainer>
                        
                        <ShadowContainer activeOpacity={0.7}
                            IconeClick={()=> setshowPassword(!showPassword)}>
                            <TextInput  placeholder={'Nome completo'}
                                placeholderTextColor={cores.primarary}
                                
                                />
                        </ShadowContainer>
                        
                        <ShadowContainer 
                            activeOpacity={1}>
                            <TextInput  placeholder={'Numero do BI'}
                                placeholderTextColor={cores.primarary}
                                
                                />
                        </ShadowContainer>

                        <ShadowContainer size={22} Icone={IconAgenda} activeOpacity={0.7}
                            IconeClick={()=> setshowPassword(!showPassword)}>
                            <TextInput  placeholder={'Senha'}
                                placeholderTextColor={cores.primarary}
                                secureTextEntry={showPassword}
                                style={{paddingLeft:10}}
                                
                                />
                        </ShadowContainer>

                        <ShadowContainer  activeOpacity={0.7}
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
