import { AntDesign } from '@expo/vector-icons';
import React,{ReactPropTypes} from 'react';
import cores from '../../utils/style/cores';
import * as S from './styled'

type Props = {
    closeModal:()=>void,
    modalOpen:any
}
export default function Modal({closeModal,modalOpen}:Props) 
{
  return (
    <S.Modal transparent visible={modalOpen}
        animationType='slide'
    >
        <S.Container>
            <S.Wrapper>
                <AntDesign name="checkcircle" size={30} color={cores.primarary80} />
                <S.TextMessage>informações atualizadas</S.TextMessage>
                <S.TextStatus>com sucesso</S.TextStatus>
                <S.BtnOK onPress={closeModal}>
                    <S.TextOK>OK</S.TextOK>
                </S.BtnOK>
            </S.Wrapper>
        </S.Container>
    </S.Modal>
  );
}
