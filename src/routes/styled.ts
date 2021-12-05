import styled from "styled-components/native";
import cores from "../utils/style/cores";


export const Left = styled.TouchableOpacity`
background-color: ${cores.primarary40};
position: absolute;
z-index: 99;
top: 20px;
width: 50px;
height: 40px;
padding-left: 10px;
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
