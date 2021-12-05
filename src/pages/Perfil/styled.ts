import styled from "styled-components/native";
import cores from "../../utils/style/cores";

export const Container = styled.View`
flex: 1;
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
background-color: transparent;
align-self: center;
justify-content: space-between;
position: absolute;
top: 180px;
`;
export const ContentItems = styled.View`
width: 100%;
height: 79px;
background-color: #fff;
margin-bottom: 1px;
justify-content: center;
`;

export const ItemIcon = styled.View`
width: 60px;
height: 60px;
background-color: red;
margin-bottom: 1px;
margin-left: 10px;
justify-content: center;
align-items: center;
`;



