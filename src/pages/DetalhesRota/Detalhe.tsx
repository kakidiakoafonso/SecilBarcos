import *  as S from './styled';
import React from 'react';
import cores, { sombra } from '../../utils/style/cores';
import { AntDesign ,Entypo,Foundation} from '@expo/vector-icons';
import { ScrollView } from 'react-native';

export default function Detalhe() 
{
    const size = 23
  return (
    <S.Container>
        <S.TextInfoRota>
            Informações das rotas
        </S.TextInfoRota>
        <S.ScrollView showsVerticalScrollIndicator={false}>
        <S.Card style={sombra}>
                
                <S.FloatIcon>
                    <AntDesign name="upcircle" size={size} color={cores.primarary80} />
                </S.FloatIcon>
            <S.CardItem>
                <S.Item>
                    <AntDesign name="home" size={24} color={cores.primarary80} />
                    <S.ItemTextContainer>
                        <S.Placeholder>Província de origem</S.Placeholder>
                        <S.Texto>Luanda</S.Texto>
                    </S.ItemTextContainer>
                </S.Item>
                <S.Item>
                    <AntDesign name="home" size={24} color={cores.primarary80} />
                    <S.ItemTextContainer>
                        <S.Placeholder>Município de origem</S.Placeholder>
                        <S.Texto>Luanda</S.Texto>
                    </S.ItemTextContainer>
                </S.Item>
            </S.CardItem>
            <S.CardItem>
                
                <S.Item>
                    <Entypo name="location" size={24} color={cores.primarary80} />
                    <S.ItemTextContainer>
                        <S.Placeholder>Terminal de origem</S.Placeholder>
                        <S.Texto>Luanda</S.Texto>
                    </S.ItemTextContainer>
                </S.Item>

            </S.CardItem>
            <S.CardItem>
                <S.Item>
                    <AntDesign name="calendar" size={24} color={cores.primarary80} />
                    <S.ItemTextContainer>
                        <S.Placeholder>Data de partida</S.Placeholder>
                        <S.Texto>20-19-2021</S.Texto>
                    </S.ItemTextContainer>
                </S.Item>
                <S.Item>
                    <AntDesign name="clockcircleo" size={24} color={cores.primarary80} />
                    <S.ItemTextContainer>
                        <S.Placeholder>Hora de partida</S.Placeholder>
                        <S.Texto>12:30</S.Texto>
                    </S.ItemTextContainer>
                </S.Item>
            </S.CardItem>

        </S.Card>


        <S.Card style={sombra}>
                
                <S.FloatIcon>
                    <AntDesign name="upcircle" size={size} color={cores.primarary80} />
                </S.FloatIcon>
            <S.CardItem>
                <S.Item>
                    <AntDesign name="home" size={24} color={cores.primarary80} />
                    <S.ItemTextContainer>
                        <S.Placeholder>Província de destino</S.Placeholder>
                        <S.Texto>Cabinda</S.Texto>
                    </S.ItemTextContainer>
                </S.Item>
                <S.Item>
                    <AntDesign name="home" size={24} color={cores.primarary80} />
                    <S.ItemTextContainer>
                        <S.Placeholder>Município de destino</S.Placeholder>
                        <S.Texto>Cabinda</S.Texto>
                    </S.ItemTextContainer>
                </S.Item>
            </S.CardItem>
            <S.CardItem>
                
                <S.Item>
                <Entypo name="location" size={24} color={cores.primarary80} />
                    <S.ItemTextContainer>
                        <S.Placeholder>Terminal de destino</S.Placeholder>
                        <S.Texto>Caluenda</S.Texto>
                    </S.ItemTextContainer>
                </S.Item>

            </S.CardItem>
            <S.CardItem>
                <S.Item>
                    <AntDesign name="calendar" size={24} color={cores.primarary80} />
                    <S.ItemTextContainer>
                        <S.Placeholder>Data da chegada</S.Placeholder>
                        <S.Texto>20-19-2021</S.Texto>
                    </S.ItemTextContainer>
                </S.Item>
                <S.Item>
                    <AntDesign name="clockcircleo" size={24} color={cores.primarary80} />
                    <S.ItemTextContainer>
                        <S.Placeholder>Hora de chegada</S.Placeholder>
                        <S.Texto>12:30</S.Texto>
                    </S.ItemTextContainer>
                </S.Item>
            </S.CardItem>

        </S.Card>


        <S.Card style={[sombra,{height:150}]}>
                
                <S.FloatIcon>
                    <AntDesign name="upcircle" size={size} color={cores.primarary80} />
                </S.FloatIcon>
            <S.CardItem>
                <S.Item>
                    <AntDesign name="user" size={24} color={cores.primarary80} />
                    <S.ItemTextContainer>
                        <S.Placeholder>Lugar(es) ocupado</S.Placeholder>
                        <S.Texto>3</S.Texto>
                    </S.ItemTextContainer>
                </S.Item>
                <S.Item>
                    <AntDesign name="checkcircle" size={24} color={cores.primarary80} />
                    <S.ItemTextContainer>
                        <S.Placeholder>Disponibilidade</S.Placeholder>
                        <S.Texto>189</S.Texto>
                    </S.ItemTextContainer>
                </S.Item>
            </S.CardItem>

                <S.TextLabel>Classe económica</S.TextLabel>
            <S.CardItem >
                <S.Item>
                    <Foundation name="dollar"  size={24} color={cores.primarary80} />
                    <S.ItemTextContainer>
                        <S.Placeholder>Custo do bilhete</S.Placeholder>
                        <S.Texto>6000 KZ</S.Texto>
                    </S.ItemTextContainer>
                </S.Item>

            </S.CardItem>
            
        </S.Card>


        <S.Card style={[sombra,{height:150}]}>
                
                <S.FloatIcon>
                    <AntDesign name="upcircle" size={size} color={cores.primarary80} />
                </S.FloatIcon>
            <S.CardItem>
                <S.Item>
                    <AntDesign name="user" size={24} color={cores.primarary80} />
                    <S.ItemTextContainer>
                        <S.Placeholder>Lugar(es) ocupado</S.Placeholder>
                        <S.Texto>3</S.Texto>
                    </S.ItemTextContainer>
                </S.Item>
                <S.Item>
                    <AntDesign name="checkcircle" size={24} color={cores.primarary80} />
                    <S.ItemTextContainer>
                        <S.Placeholder>Disponibilidade</S.Placeholder>
                        <S.Texto>189</S.Texto>
                    </S.ItemTextContainer>
                </S.Item>
            </S.CardItem>

                <S.TextLabel>Classe executiva</S.TextLabel>
            <S.CardItem >
                <S.Item>
                    <Foundation name="dollar"  size={24} color={cores.primarary80} />
                    <S.ItemTextContainer>
                        <S.Placeholder>Custo do bilhete</S.Placeholder>
                        <S.Texto>11000 KZ</S.Texto>
                    </S.ItemTextContainer>
                </S.Item>

            </S.CardItem>
            
        </S.Card>

        

        </S.ScrollView>
        <S.BtnReservar activeOpacity={0.7}>
            <S.TextBtnReservar>
                FAZER RESERVA
            </S.TextBtnReservar>
        </S.BtnReservar>
    </S.Container>
  );
}
