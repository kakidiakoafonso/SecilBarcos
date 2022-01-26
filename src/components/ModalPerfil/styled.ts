import styled from "styled-components/native";
import cores from "../../utils/style/cores";

export  const Modal = styled.Modal`
flex: 1;
`;
export  const Container = styled.View`
flex: 1;
background-color: rgba(0,0,0,0.5);
justify-content: center;
align-items: center;
`;
export  const Wrapper = styled.View`
width: 90%;
height: 200px;
border-radius: 6px;
background-color: ${cores.primarary40};
justify-content: center;
align-items: center;
`;

export const TextMessage = styled.Text`
margin: 5px 0px;
`;
export const TextStatus = styled.Text`
margin: 4px 0px;
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