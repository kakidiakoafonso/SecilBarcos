import { AntDesign } from '@expo/vector-icons';
import React,{ReactPropTypes} from 'react';
import cores, { sombra } from '../../utils/style/cores';
import * as S from './styled'
import { Entypo } from '@expo/vector-icons';

type Props = {
    closeModal:()=>void,
    modalOpen:any,
    message:string
}
export default function Modal({closeModal,modalOpen,message}:Props) 
{
  return (
    <S.Modal transparent visible={modalOpen}
        animationType='slide'
    >
        <S.Container>
            <S.Close onPress={closeModal}/>
            <S.Wrapper>
                <S.Titulo>Terminais</S.Titulo>
                <S.FlatList
                data={[1,2,3,4,5,6,7]}
                keyExtractor={e=>String(e)}
                renderItem={()=>
                <S.TerminaisContainer onPress={closeModal}
                    style={sombra} activeOpacity={0.7}>
                    <Entypo name="location-pin" size={24} color={cores.primarary80} />
                    <S.Text>Ilha de luanda </S.Text>
                </S.TerminaisContainer>
                }
                />
            </S.Wrapper>
        </S.Container>
    </S.Modal>
  );
}
