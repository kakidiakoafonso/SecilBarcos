import { Dimensions } from "react-native";
import styled from "styled-components/native";
import cores from "../../utils/style/cores";
const {height,width} = Dimensions.get('screen')
export const Container = styled.View`
width: ${width+"px"};
height: ${height+"px"};
`;
export const TopContainer = styled.View`
width: 100%;
height: 250px;
background-color: ${cores.primarary};
justify-content: flex-start;
align-items: center;
`;

export const UserContainer = styled.TouchableOpacity`
width: 90%;
justify-content: center;
align-items: center;
margin-top: 50px;
`;

export const Nome = styled.Text`
color: ${cores.dark};
font-size: 20px;
margin: 10px 0px;
`;
export const Numero = styled.Text`
color: ${cores.dark};
font-size: 15px;
`;
export const Content = styled.View`
width: 90%;
height: 400px;
background-color: #fff;
align-self: center;
justify-content: space-between;
position: absolute;
top: 180px;
border-radius:5px;
`;
export const ContentItems = styled.View`
width: 100%;
height: 79px;
background-color: #fff;
margin-bottom: 1px;
align-items: center;
justify-content: flex-start;
flex-direction: row;
border-bottom-width:2px;
border-bottom-color: ${cores.dark};
border-radius: 5px;
`;

export const ItemIcon = styled.View`
width: 60px;
height: 60px;
margin-bottom: 1px;
margin-left: 10px;
justify-content: center;
align-items: center;
`;

export const ContentText = styled.View`
width: 70%;
height: 60px;
padding-left: 20px;
justify-content: center;
`;
export const Placeholder = styled.Text`
color: ${cores.grey};
margin-bottom: 10px;
`;
export const Text = styled.Text`
color: ${cores.grey};
font-weight: bold;
`;
export const Input = styled.TextInput`
color: ${cores.black};
font-weight: bold;
width: 100%;
`;
export const BtnEditar = styled.TouchableOpacity`
border: 1px solid ${cores.primarary80};
font-weight: bold;
width: 90%;
height: 55px;
position: absolute;
bottom: 5px;
align-self: center;
align-items: center;
justify-content: center;
flex-direction: row;
border-radius: 6px;
`;
export const TextBtnEditar = styled.Text`
color: ${cores.primarary80};
font-weight: bold;
margin-left: 10px;
font-size: 19px;
`;
export const BtnSalvar = styled.TouchableOpacity`
background-color: ${cores.primarary80};
font-weight: bold;
width: 90%;
height: 55px;
position: absolute;
bottom: 5px;
align-self: center;
align-items: center;
justify-content: center;
flex-direction: row;
border-radius: 6px;
`;
export const TextBtnSalvar = styled.Text`
color: ${cores.primarary40};
font-weight: bold;
font-size: 19px;
margin-left: 10px;
`;


