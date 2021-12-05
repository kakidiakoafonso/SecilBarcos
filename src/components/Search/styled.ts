import styled from "styled-components/native";
import cores from "../../utils/style/cores";

export const Container = styled.View`
height: 45px;
width: 90%;
margin-top: 10px;
align-self: center;
justify-content: center;
align-items: center;
border-radius: 60px;
background-color: ${cores.dark};
flex-direction: row;
`;
export const TextInput = styled.TextInput`
width: 80%;
height: 90%;
font-size: 15px;
`;