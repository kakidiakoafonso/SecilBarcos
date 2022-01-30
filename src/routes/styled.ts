import styled from "styled-components/native";
import cores from "../utils/style/cores";


export const Left = styled.TouchableOpacity`
background-color: ${cores.primarary40};
position: absolute;
z-index: 99;
top: 20px;
width: 35px;
height: 35px;
padding-left: 10px;
align-items: center;
justify-content: center;
`;
export const Right = styled.TouchableOpacity`
/* background-color: ${cores.primarary}; */
position: absolute;
right: 0px;
z-index: 99;
top: 20px;
right: 0px;
width: 50px;
height: 40px;
justify-content: center;
align-items: center;
`;

export const Titulo = styled.Text`
font-weight: bold;
`;



export const PopOver = styled.View`
/* background-color: pink; */
width: 100%;
align-items: flex-end;
`;
export const PopOverButton = styled.TouchableOpacity`
width: 80%;
/* background-color: red; */
align-items: flex-end;
flex-direction: row;
justify-content: space-between;
`;
export const PopOverText = styled.Text`
font-weight: bold;
font-size: 18px;
color: ${cores.grey};
`;