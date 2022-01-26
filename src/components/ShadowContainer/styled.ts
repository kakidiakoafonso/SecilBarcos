import styled from "styled-components/native";
import cores from "../../utils/style/cores";

export const Container = styled.View`
width: 90%;
height: 55px;
border-radius: 10px;
flex-direction: row;
align-items: center;
justify-content: space-between;
/* padding-left: 10px; */
padding-right: 10px;
background-color: ${cores.primarary40};
`;

export const TouchableOpacity = styled.TouchableOpacity`
background-color: ${cores.primarary80};
width: 50px;
height: 100%;
justify-content: center;
align-items: center;
border-top-left-radius: 8px;
border-bottom-left-radius: 8px;
margin-right: 10px;
`;