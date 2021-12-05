import React ,{useState} from 'react'
import { View, Text, } from 'react-native'
import ShadowContainer from '../../components/ShadowContainer/ShadowContainer'
import { Container,ContentText,TextInfo,Titulo,
    TextInput, Content, TextCriarConta,ContentCenter,
BtnReset } from './styled'

//Icone 
import IconCheck from '../../assets/svg/check.svg'
import Visivel from '../../assets/svg/visivel.svg'
import cores from '../../utils/style/cores'
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary'
import { TouchableOpacity } from 'react-native-gesture-handler'
import KeyBoardAvoidWrapper from '../../components/KeyBoardAvoidWrapper/KeyBoardAvoidWrapper'
import Header from '../../components/HeaderSign/Header'
import { useNavigation } from '@react-navigation/core'

export default function Login() 
{
    const nav = useNavigation()
    const [showPassword, setshowPassword] = useState<boolean>(true)
    return (
        <KeyBoardAvoidWrapper>
        <Container>
            <Header titulo="Login"/>
            <Content>

                <ContentText>
                    <Titulo>Entrar na minha conta!</Titulo>
                    <TextInfo>Faca login com numero de telefone</TextInfo>
                </ContentText>

                <ContentCenter>
                        <ShadowContainer Icone={IconCheck}
                        activeOpacity={1}>
                            <TextInput  placeholder={'User name'}
                                placeholderTextColor={cores.primarary}
                                
                                />
                        </ShadowContainer>
                        <ShadowContainer Icone={Visivel} activeOpacity={0.7}
                            IconeClick={()=> setshowPassword(!showPassword)}>
                            <TextInput  placeholder={'Senha'}
                                placeholderTextColor={cores.primarary}
                                secureTextEntry={showPassword}
                                
                                />
                        </ShadowContainer>

                        <BtnReset onPress={()=> nav.navigate('Reset')}>
                            <TextCriarConta>
                                Esqueci a senha
                            </TextCriarConta>
                        </BtnReset>

                </ContentCenter>

                <ButtonPrimary titulo="CONTINUE" color={cores.primarary80}
                    click={()=> console.log('aa')}
                />
                    <TouchableOpacity onPress={()=> nav.navigate('SignUp')}>
                        <TextCriarConta>
                            Criar conta
                        </TextCriarConta>
                    </TouchableOpacity>
            
            </Content>

        </Container>
        </KeyBoardAvoidWrapper>
    )
}
