import React from 'react'
import { View, Text } from 'react-native'
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary'
import { BottomContent, Container, Content, Nome, TextDireitos } from './styled'

//Imagem
import ImgBarco from '../../assets/image/-sea.png'
import { LinearGradient } from 'expo-linear-gradient'
import cores from '../../utils/style/cores'
import { useNavigation } from '@react-navigation/core'
export default function Splash() 
{
    const navigation = useNavigation()
    return (
        <Container source={ImgBarco}>
            <LinearGradient
                style={{flex:1,justifyContent:'flex-end',alignItems:'center'}}
                start={{x:0,y:1}}
                end={{x:1,y:0.1}}
                colors={[cores.primarary, 'transparent']}>
               
               <Content>

               <Nome>BILHETICA</Nome>
                <BottomContent>

                    <ButtonPrimary icone titulo='VAMOS COMECAR' color={cores.primarary80}
                        click={()=> navigation.navigate('Login')}/>
                    <TextDireitos>
                        Todos os direitos reservados 2021
                    </TextDireitos>

                </BottomContent>
               </Content>
            </LinearGradient>
        </Container>
    )
}
