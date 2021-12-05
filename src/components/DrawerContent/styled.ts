import styled from "styled-components/native";
import cores from "../../utils/style/cores";

export const Container = styled.View`
background-color: ${cores.primarary};
flex: 1;
justify-content: center;
align-items: center;
`;
export const UserContainer = styled.TouchableOpacity`
width: 90%;
height: 30%;
justify-content: center;
align-items: center;
`;

export const Nome = styled.Text`
color: ${cores.dark};
font-size: 25px;
margin: 15px 0px;
`;
export const Numero = styled.Text`
color: ${cores.dark};
font-size: 18px;
`;
export const Item = styled.TouchableOpacity`
width: 80%;
height: 50px;
align-items: center;
flex-direction: row;
`;
export const Texto = styled.Text`
color: ${cores.dark};
font-size: 17px;
margin-left: 20px;
`;