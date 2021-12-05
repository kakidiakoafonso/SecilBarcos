import React ,{useState} from 'react'
import { View, Text, } from 'react-native'
import ShadowContainer from '../../components/ShadowContainer/ShadowContainer'
import { Container,ContentText,TextInfo,Titulo,
    TextInput, Content, TextCriarConta,ContentCenter } from './styled'

//Icone 
import IconVisivel from '../../assets/svg/visivel.svg'
import cores from '../../utils/style/cores'
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary'
import { TouchableOpacity } from 'react-native-gesture-handler'
import KeyBoardAvoidWrapper from '../../components/KeyBoardAvoidWrapper/KeyBoardAvoidWrapper'
import Header from '../../components/HeaderSign/Header'

export default function ResetPassword() 
{
    const [showPassword, setshowPassword] = useState<boolean>(true)
    return (
        <KeyBoardAvoidWrapper>
        <Container>
            <Header titulo="Recuperar senha"/>
            <Content>

                <ContentText>
                    <Titulo>Criar nova senha!</Titulo>
                </ContentText>

                        

                        <ShadowContainer size={22} Icone={IconVisivel} activeOpacity={0.7}
                            IconeClick={()=> setshowPassword(!showPassword)}>
                            <TextInput  placeholder={'Senha'}
                                placeholderTextColor={cores.primarary}
                                secureTextEntry={showPassword}
                                style={{paddingLeft:10}}
                                
                                />
                        </ShadowContainer>

                        <ShadowContainer size={22} Icone={IconVisivel} activeOpacity={0.7}
                            IconeClick={()=> setshowPassword(!showPassword)}>
                            <TextInput  placeholder={'Confirmar senha'}
                                placeholderTextColor={cores.primarary}
                                secureTextEntry={showPassword}
                                style={{paddingLeft:10}}
                                
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
