import { AntDesign } from '@expo/vector-icons';
import React,{ReactPropTypes} from 'react';
import cores from '../../utils/style/cores';
import * as S from './styled'
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import form from '../PDF/PDF'
import ReactNativeTooltipMenu from 'react-native-tooltip-menu';

type Props = {
    closeModal:()=>void,
    modalOpen:any,
    message:string
}
export default function Modal({closeModal,modalOpen,message}:Props) 
{
    const html = `
        <html>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
        </head>
        <body style="text-align: center;">
            <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
            Hello Expo!
            </h1>
            <img
            src="https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png"
            style="width: 90vw;" />
        </body>
        </html>
        `;
    const printToFile = async () => {
        // On iOS/android prints the given html. On web prints the HTML from the current page.
        const { uri } = await Print.printToFileAsync({
          html
        });
        console.log('File has been saved to:', uri);
        await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
        closeModal()
      }
  return (
    <S.Modal transparent visible={modalOpen}
        animationType='slide'
    >
        <S.Container>
            <S.Wrapper>
                <AntDesign name="checkcircle" size={30} color={cores.primarary80} />
                <S.TextMessage>{message}</S.TextMessage>
                <S.TextStatus>com sucesso</S.TextStatus>
                <S.BtnOK onPress={closeModal}>
                    <S.TextOK>Salvar compravativo</S.TextOK>
                </S.BtnOK>
            </S.Wrapper>
        </S.Container>
    </S.Modal>
  );
}
