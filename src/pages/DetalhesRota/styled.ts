import styled from "styled-components/native";
import cores from "../../utils/style/cores";

export const Container = styled.View`
flex: 1;
/* background-color: #fff; */
align-items: center;
padding-top: 70px;
justify-content: space-evenly;
`;
export const TextInfoRota = styled.Text`
color: ${cores.primarary};
font-size: 18px;
font-weight: bold;
margin-bottom: 10px;
`;
export const Card = styled.View`
width: 90%;
height: 200px;
border-radius: 6px;
background-color: #fff;
margin-bottom: 20px;
justify-content: center;
justify-content: flex-end;
align-self: center;
`;

export const CardItem = styled.View`
width: 100%;
height:60px;
border-radius: 6px;
margin-top: 5px;
flex-direction: row;
`;


export const ScrollView = styled.ScrollView`
/* background-color: red; */
width: 100%;
height: 40%;
padding-top: 12px;
padding-bottom: 12px;
`;
export const FloatIcon = styled.View`
width: 30px;
height: 30px;
position: absolute;
top: -7px;
right: 5px;
`
export const Item = styled.View`
width: 50%;
height: 60px;
border-radius: 6px;
margin-bottom: 10px;
justify-content: space-evenly;
align-items: center;
flex-direction: row;
`;
export const ItemTextContainer = styled.View`
`;
export const Placeholder = styled.Text`
font-size: 12px;
color: ${cores.grey};
`;
export const Texto = styled.Text`
color: ${cores.black};
font-weight: bold;
`;




export const BtnReservar = styled.TouchableOpacity`
width: 90%;
height: 55px;
border-radius: 6px;
margin-bottom: 6px;
background-color: ${cores.primarary80};
justify-content: center;
align-items: center;
`;

export const TextBtnReservar = styled.Text`
color: ${cores.primarary40};
font-weight: bold;
`;
export const TextLabel = styled.Text`
color: ${cores.black};
font-weight: bold;
position: absolute;
top: 5px;
left: 10px;
`;

