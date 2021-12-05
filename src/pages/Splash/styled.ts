import styled from "styled-components/native";
import cores from "../../utils/style/cores";

export const Container = styled.ImageBackground`
flex:1;
background-color: ${cores.primarary};
`;
export const Nome = styled.Text`
font-size:29px;
color: ${cores.primarary40};
font-weight: bold;
`;
export const TextDireitos = styled.Text`
font-size:13px;
color: ${cores.primarary40};
font-weight: bold;
`;

export const Content = styled.View`
width: 100%;
height: 60%;
align-items: center;
justify-content: space-between;
padding-bottom: 10px;
`;
export const BottomContent = styled.View`
width: 100%;
height: 40%;
align-items: center;
justify-content: space-between;
padding-bottom: 10px;
`;