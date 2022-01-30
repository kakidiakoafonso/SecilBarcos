import styled from "styled-components/native";
import cores from "../../utils/style/cores";

export const Container = styled.SafeAreaView`
flex: 1;
background-color: ${cores.primarary40};
padding-top: 10px;
`;
export const ItemContainer = styled.View`
width: 90%;
height: 100px;
background-color: #fff;
align-self: center;
border-radius: 6px;
margin-bottom: 20px;
`;
export const TopContainer = styled.View`
width: 90%;
height: 60%;
background-color: #fff;
align-self: center;
justify-content: space-evenly;
`;
export const Row = styled.View`
width: 95%;
/* height: 60px; */
flex-direction: row;
align-items: center;
/* background-color: red; */
`;
export const TextInfo = styled.Text`
color: ${cores.grey};
margin-left: 10px;
`;
export const TextValue = styled.Text`
color: ${cores.grey};
font-weight: bold;
`;
export const BottomContainer = styled.SafeAreaView`
width: 90%;
height: 35%;
/* background-color: red; */
align-self: center;
border-color: ${cores.grey};
border-bottom-right-radius: 6px;
border-bottom-left-radius: 6px;
flex-direction: row;
align-items: center;
`;

export const FlatList = styled.FlatList`

`;
export const TextDataMessage = styled.Text`
color: ${cores.primarary80};
font-weight: bold;
margin-right: 8px;
`;
export const TextData = styled.Text`
color: ${cores.grey};
font-weight: bold;
`;
export const TooltipIcon = styled.TouchableOpacity`
position: absolute;
right: -9px;
width: 30px;
height: 30px;
justify-content: center;
align-items: center;
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
