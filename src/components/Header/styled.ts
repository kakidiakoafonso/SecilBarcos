import styled from "styled-components/native";
import cores from "../../utils/style/cores";

export const Container = styled.View`
width:100%;
height: 40px;
justify-content: center;
align-items: center;
`;
export const BackButton =styled.TouchableOpacity`
position: absolute;
left: 10px;
`; 
export const Titulo =styled.Text`
color: ${cores.grey};
font-size: 20px;
`; 