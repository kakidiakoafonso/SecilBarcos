import { Dimensions } from "react-native";
import styled from "styled-components/native";
import cores from "../../utils/style/cores";
 const {height,width} = Dimensions.get('screen')
export const Container = styled.SafeAreaView`
width: ${width+'px'};
height: ${height+'px'};
background-color: ${cores.primarary40};
`;
export const ContentText = styled.View`
width: 100%;
height: 10%;
align-items: center;
justify-content: space-between;
`;
export const Titulo = styled.Text`
font-size:22px;
color: ${cores.primarary};
font-weight: bold;
`;
export const TextInfo = styled.Text`
font-size:16px;
color: ${cores.grey};
font-weight: bold;
`;


export const TextInput= styled.TextInput`
width: 90%;
height: 80%;
font-size: 16px;
`;

export const Content = styled.View`
width: 100%;
height: 50%;
align-items: center;
justify-content: space-between;
padding-bottom: 10px;
margin-top: 10%;
`;


export const ContentCenter = styled.View`
width: 100%;
height: 35%;
align-items: center;
justify-content: space-between;
padding-bottom: 10px;
`;


export const TextWarning = styled.Text`
font-size:13px;
color: ${cores.primarary40};
font-weight: bold;
`;
export const TextCriarConta = styled.Text`
font-size:13px;
color: ${cores.primarary80};
font-weight: bold;
`;