import styled from "styled-components/native";
import cores from "../../utils/style/cores";

export  const Modal = styled.Modal`
flex: 1;
`;
export  const Container = styled.View`
flex: 1;
background-color: rgba(0,0,0,0);
justify-content: flex-end;
align-items: center;
`;
export  const Close = styled.TouchableOpacity`
width: 100%;
height: 100%;
`;
export  const Wrapper = styled.View`
width: 100%;
height: 250px;
border-top-left-radius: 6px;
border-top-right-radius: 6px;
background-color: ${cores.primarary80};
padding: 10px 0px;
`;

export const FlatList = styled.FlatList`

`;
export const TerminaisContainer = styled.TouchableOpacity`
width: 90%;
height: 45px;
background-color: #fff;
border-radius: 6px;
align-items: center;
padding-left: 5%;
flex-direction: row;
margin-bottom: 10px;
align-self: center;
`;
export const Text = styled.Text`
margin-left: 4px;
color: ${cores.primarary80};
font-weight: bold;
`;
export const BtnOK = styled.TouchableOpacity`
margin: 5px 0px;
border: 2px solid ${cores.primarary80};
width:100px;
height: 40px;
justify-content: center;
align-items: center;
border-radius: 3px;
`;
export const TextOK = styled.Text`
font-size: 20px;
font-weight: bold;
color: ${cores.primarary80};
`;
export const Titulo = styled.Text`
font-size: 24px;
font-weight: bold;
color: ${cores.primarary40};
align-self: flex-end;
margin:5px 5% 5px 0px;
`;