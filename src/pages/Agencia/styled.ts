import styled from "styled-components/native";
import cores from "../../utils/style/cores";

export const Container = styled.View`
flex: 1;
padding-top: 75px;
`;
export const Content = styled.View`
flex: 1;
justify-content: space-evenly;
`;
export const ContainerFlatList = styled.View`
height: 85%;
width: 100%;
`;
export const FlatList = styled.FlatList`

`;
export const Wrapper = styled.TouchableOpacity`
width: 90%;
align-self: center;
height: 100px;
background-color: #fff;
justify-content: center;
align-items: center;
border-radius: 6px;
margin-bottom: 15px;
`;

export const Row = styled.View`
width: 90%;
height: 40%;
flex-direction: row;
margin: 2px 0px;
/* background-color: ${cores.primarary40}; */
/* justify-content: center; */
align-items: center;
`;
export const IconContainer = styled.View`
flex-direction: row;
/* background-color: ${cores.primarary40}; */
justify-content: center;
align-items: center;
margin-right: 6%;
`;


export const Textos = styled.Text`
color: ${cores.grey};
font-weight: bold;
font-size: 20px;
`;
export const Descricao = styled.Text`
color: ${cores.grey};
`;




export const FilterContainer = styled.TouchableOpacity`
/* background-color: red; */
width: 90%;
height: 60px;
flex-direction: row;
justify-content: flex-end;
align-items: center;
align-self: center;
`;
export const FilterButton = styled.TouchableOpacity`
background-color: ${cores.primarary80};
width: 60px;
height: 35px;
justify-content: center;
align-items: center;
margin-left: 10px;
`;
export const Button = styled.TouchableOpacity`
/* background-color: red; */
/* width: 60px; */
`;
export const TextButton = styled.Text`
color: ${cores.primarary80};
`;



export const SearchItems = styled.View`
color: ${cores.primarary80};
width: 90%;
align-self: center;
height: 30px;
margin-bottom: 10px;
flex-direction: row;
justify-content: space-between;
`;
export const IconSearch = styled.View`
color: ${cores.grey};
`;
export const TextSearch = styled.Text`
color: ${cores.primarary};
`;


