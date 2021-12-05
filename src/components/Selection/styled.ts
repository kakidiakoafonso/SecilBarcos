import styled from "styled-components/native";
import cores from "../../utils/style/cores";

export const Container = styled.View`
width: 90%;
height: 50px;
background-color: ${cores.primarary};
align-self: center;
border-radius: 5px;
flex-direction: row;
align-items:center;
padding-left: 5px;
`;


export const  LeftContainer = styled.TouchableOpacity`
background-color: ${cores.primarary80};
width: 40px;
height: 50px;
position: absolute;
right: 0px;
justify-content: center;
align-items: center;
`;
export const Titulo = styled.Text`
color: ${cores.dark};
font-size: 13px;
margin-left:5px;
`;
export const Texto = styled.Text`
color: #fff;
font-size: 13px;
font-weight: bold;
margin-left:5px;
`;