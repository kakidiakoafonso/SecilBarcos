import styled from "styled-components/native";
import cores from "../../utils/style/cores";

export const Container = styled.TouchableOpacity`
width: 90%;
height: 60px;
justify-content: center;
align-items: center;
border-radius: 6px;
flex-direction: row;
`;
export const IconeContainer =  styled.View`
position: absolute;
left: 30px;
`;
export const Titulo =  styled.Text`
font-size: 16px;
color: ${cores.primarary40};
`;