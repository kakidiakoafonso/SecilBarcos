import React,{useState} from 'react'
import {Container, Content, TopContainer, Placeholder,  Text,
UserContainer,Nome,Numero, ContentItems, ItemIcon, ContentText, Input, BtnEditar, TextBtnEditar, BtnSalvar, TextBtnSalvar} from './styled'
import { Foundation,Entypo,Feather   } from '@expo/vector-icons';
//Svg
import UserIcon from '../../assets/svg/User.svg'
import TelefoneIcon from '../../assets/svg/User.svg'
import DocIcon from '../../assets/svg/User.svg'
import DateIcon from '../../assets/svg/Date.svg'
import AdressIcon from '../../assets/svg/home.svg'
import cores from '../../utils/style/cores'
import Modal from '../../components/ModalPerfil/Modal';
import { ActivityIndicator } from 'react-native';

const sombra = {shadowColor: "#000",
shadowOffset: {
    width: 0,
    height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5}

export default function Perfil()
 {
     const [editar, seteditar] = useState<boolean>(false);
     const [modalVisible, setmodalVisible] = useState<boolean>(false);
     const [loading, setloading] = useState<boolean>(false);
    
     function handleSave() 
     {
        setloading(true)
        setTimeout(() => {
            setmodalVisible(true)   
            setloading(false)
        }, 2000);
     }

     return (
       <Container>
           <TopContainer>

           <UserContainer activeOpacity={0.7}>
                <UserIcon width={40} height={40} fill="#fff"/> 
                <Nome>Kakidiako Afonso</Nome>
                <Numero>945176405</Numero>
            </UserContainer>

            </TopContainer>
           <Content style={sombra}>

            <ContentItems >
                <ItemIcon>
                    <UserIcon width={25} height={25} fill={cores.primarary80}/> 
                </ItemIcon>
                <ContentText>

                <Placeholder>
                    Nome
                </Placeholder>
                { !editar &&
                <Text>
                    0064321LA64
                </Text> }
                { editar && <Input placeholder='0064321LA64' placeholderTextColor={cores.black}/>}
                </ContentText>
            </ContentItems>
            <ContentItems >
                <ItemIcon>
                        <Foundation name="telephone" size={30} color={cores.primarary80} />
                </ItemIcon>
                <ContentText>

                <Placeholder>
                    Telefone
                </Placeholder>
                { !editar &&
                <Text>
                    0064321LA64
                </Text> }
                { editar && <Input placeholder='0064321LA64' placeholderTextColor={cores.black}/>}
                </ContentText>
            </ContentItems>
            <ContentItems >
                <ItemIcon>
                    <Entypo name="v-card" size={27} color={cores.primarary80} />
                </ItemIcon>
                <ContentText>

                <Placeholder>
                    Nº BI
                </Placeholder>
                { !editar &&
                <Text>
                    0064321LA64
                </Text> }
                { editar && <Input placeholder='0064321LA64' placeholderTextColor={cores.black}/>}
                </ContentText>
            </ContentItems>
            <ContentItems >
                <ItemIcon>
                    <DateIcon width={22} height={22} fill={cores.primarary80}/> 
                </ItemIcon>
                <ContentText>

                <Placeholder>
                    Data de nascimento
                </Placeholder>
                { !editar &&
                <Text>
                    0064321LA64
                </Text> }
                { editar && <Input placeholder='0064321LA64' placeholderTextColor={cores.black}/>}
                </ContentText>
            </ContentItems>
            <ContentItems style={{borderBottomWidth:0}}>
                <ItemIcon>
                    <AdressIcon width={25} height={25} fill={cores.primarary80}/> 
                </ItemIcon>
                <ContentText>

                <Placeholder>
                    Morada
                </Placeholder>
                { !editar &&
                <Text>
                    0064321LA64
                </Text> }
                { editar && <Input placeholder='0064321LA64' placeholderTextColor={cores.black}/>}
                </ContentText>
            </ContentItems>

           </Content>
                {editar?
                <BtnSalvar onPress={handleSave}>
                    {loading?
                    <ActivityIndicator size={40} color={cores.black}/>
                    :
                    <>
                    <Entypo name="save" size={35} color={cores.primarary40} />
                    <TextBtnSalvar>Salvar</TextBtnSalvar>
                    </>
                    }
                </BtnSalvar>
                :
                <BtnEditar onPress={()=>seteditar(!editar)}>
                    <Feather name="edit" size={30} color={cores.primarary80} />
                    <TextBtnEditar>EDITAR</TextBtnEditar>
                </BtnEditar>
                }

                <Modal closeModal={()=>setmodalVisible(false)} modalOpen={modalVisible}/>
       </Container>
    )
}
