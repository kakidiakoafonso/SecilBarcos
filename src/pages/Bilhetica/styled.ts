import { Dimensions } from "react-native";
import styled from "styled-components/native";
import cores from "../../utils/style/cores";

const {width} = Dimensions.get('screen')
export const Container = styled.SafeAreaView`
flex: 1;
background-color: ${cores.primarary40};
justify-content: space-evenly;
`;

export const Center = styled.TouchableOpacity`
width: 90%;
height: 50px;
align-self: center;
justify-content: center;
align-items: center;
border-radius: 4px;
border: 0.5px solid ${cores.primarary} ;
`;

export const DateContainer = styled.View`
flex-direction: row;
justify-content: center;
align-items: center;
`;
export const TextoPartida = styled.Text`
color: ${cores.primarary80};
font-size: 18px;
font-weight: bold;
`;
export const TextoDia = styled.Text`
color: ${cores.primarary80};
font-size: 40px;
margin: 0px 10px;
`;
export const TextoMesSemana = styled.Text`
color: ${cores.primarary80};
font-size: 15px;
`;

export const InfoContainer = styled.View`
width: 100%;
height:80px;
align-self: center;
border-width: 2px;
border-color: ${cores.primarary40};
flex-direction: row;
align-items: center;
justify-content: center;
`;

export const BoxSeparator = styled.View`
height: 100%;
width: 2px;
background-color: ${cores.primarary};
`;
export const Box = styled.View`
width: 45%;
height: 100%;
/* background-color: red; */
justify-content: center;

`;

export const Titulo = styled.Text`
color: ${cores.primarary};
font-weight: bold;
margin-bottom: 8px;
`;
export const Texto = styled.Text`
color: ${cores.primarary80};
font-size: 14px;
font-weight: bold;
`;

export const LeftButton = styled.TouchableOpacity`
width: 30px;
height: 30px;
position: absolute;
right: 10px;
justify-content: center;
align-items: center;
`;
export const ButtonReservar = styled.TouchableOpacity`
width: 85%;
height: 60px;
align-self: center;
background-color: ${cores.primarary60};
justify-content: center;
align-items: center;
border-radius: 7px;
`;
export const ButtonReservarTexto = styled.Text`
color: ${cores.primarary80};
font-size: 14px;
font-weight: bold;
`;


