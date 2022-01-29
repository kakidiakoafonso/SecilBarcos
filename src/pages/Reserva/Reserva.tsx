import React from 'react'
import cores, { sombra } from '../../utils/style/cores'
import * as S from './styled'
import { MaterialIcons ,Entypo,FontAwesome,AntDesign} from '@expo/vector-icons';
import { Tooltip, Text, colors } from 'react-native-elements';


export default function Bilhetica() {
    return (
        <S.Container>

        <S.FlatList
            data={[1,2,3,4,5,6,7,8]}
            keyExtractor={e=>String(e)}
            renderItem={()=>
            <S.ItemContainer style={sombra}>
                <S.TopContainer>

                    <S.TooltipIcon>
                    <Tooltip
                        popover={<S.PopOver>
                                    <S.PopOverButton>
                                        <AntDesign name="closecircle" size={20} color={cores.primarary80} />
                                        <S.PopOverText>Cancelar</S.PopOverText>
                                    </S.PopOverButton>
                                    <S.PopOverButton>
                                        <FontAwesome name="trash-o" size={24} color={cores.primarary80} />
                                        <S.PopOverText>Editar</S.PopOverText>
                                    </S.PopOverButton>
                                </S.PopOver>}
                        pointerColor={cores.primarary80}
                        withPointer={true}
                        overlayColor={"rgba(0,0,0,0)"}
                        containerStyle={[{height:70,backgroundColor:'#fff'},sombra]}
                        >
                        <Entypo name="dots-three-vertical" size={20} color={cores.primarary80} />
                    </Tooltip>
                    </S.TooltipIcon>


                    <S.Row>
                        <MaterialIcons name="my-location" size={24} color={cores.primarary80} />
                        <S.TextInfo>Terminal de origem - </S.TextInfo>
                        <S.TextValue>Ilha de luanda</S.TextValue>
                    </S.Row>
                    <S.Row>
                        <Entypo name="location-pin" size={24} color={cores.primarary80} />
                        <S.TextInfo>Terminal de origem - </S.TextInfo>
                        <S.TextValue>Ilha de luanda</S.TextValue>
                    </S.Row>
                </S.TopContainer>
                <S.BottomContainer style={{borderTopWidth:1}}>
                    <S.TextDataMessage>Data</S.TextDataMessage>
                    <S.TextData>26 de novembro Terca-feira</S.TextData>
                </S.BottomContainer>
            </S.ItemContainer>
            }
            />
        </S.Container>
    )
}
