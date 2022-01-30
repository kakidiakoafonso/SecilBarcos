import React ,{useContext, useState} from 'react'
import { View, Text, ActivityIndicator, } from 'react-native'
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
import { AntDesign,MaterialIcons } from '@expo/vector-icons';
import { UserContext } from '../../context/User'

export default function Login() 
{
    const nav = useNavigation()
    const [showPassword, setshowPassword] = useState<boolean>(true)
    const [loading, setloading] = useState<boolean>(false)
    const {setlogado} = useContext(UserContext)


    const handleLogin = ()=> {
        setloading(true)
        setTimeout(()=>{
            setloading(false)
            setlogado(true)
            
        },1500)
    }
    return (
        <KeyBoardAvoidWrapper>
        <Container>
            <Header titulo="Login"/>
            <Content>

                <ContentText>
                    <Titulo>Entrar na minha conta!</Titulo>
                    <TextInfo>Faça login com o número de telefone</TextInfo>
                </ContentText>

                <ContentCenter>
                        <ShadowContainer Icone={()=><AntDesign name="user" size={24} color={cores.primarary40} />}
                        activeOpacity={1}>
                            <TextInput  placeholder={'User name'}
                                placeholderTextColor={cores.primarary}
                                
                                />
                        </ShadowContainer>
                        <ShadowContainer activeOpacity={0.7}

                            RigthIcone={()=><MaterialIcons name={showPassword? "visibility":"visibility-off"} size={24} color={cores.primarary80} />}
                            Icone={()=><MaterialIcons name={showPassword? "visibility":"visibility-off"} size={24} color={cores.primarary40} />}
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
                    click={handleLogin} loading={loading}
                />
                    <TouchableOpacity onPress={()=>nav.navigate('SignUp')}>
                            <TextCriarConta>
                            Criar conta
                            </TextCriarConta>
                    </TouchableOpacity>
            
            </Content>

        </Container>
        </KeyBoardAvoidWrapper>
    )
}
