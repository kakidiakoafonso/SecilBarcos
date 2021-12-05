import styled from "styled-components/native";
import cores from "../../utils/style/cores";

export const Container = styled.SafeAreaView`
flex: 1;
background-color: ${cores.primarary40};
`;

export const Item = styled.TouchableOpacity`
background-color: ${cores.primarary};
width: 90%;
height: 100px;
align-self: center;
margin-top: 10px;
border-radius: 5px;

justify-content: center;
align-items: center;
`;
export const ItemSeparator = styled.View`
background-color: ${cores.primarary40};
width: 100%;
height: 0.5px;
`;
export const Content = styled.View`
flex-direction: row;
width: 96%;
height: 45%;
align-items: center;
justify-content: space-between;
`;
export const Texto = styled.Text`
color: ${cores.primarary80};
`;
export const TextoValue = styled.Text`
color: ${cores.primarary40};
`;
export const TextoVerTodos = styled.Text`
color: ${cores.primarary80};
font-weight: bold;
font-size:18px;
`;

export const ButtonVerTodos = styled.TouchableOpacity`
width: 90%;
height: 60px;
border: 1px;
align-self: center;
position: absolute;
bottom: 20px;
border-radius: 8px;
border-color: ${cores.primarary80};
justify-content: center;
align-items: center;
`;