import styled from "styled-components/native";
import cores from "../../utils/style/cores";
import { Dimensions } from "react-native";

const {width} = Dimensions.get('screen')
export const Container= styled.View`
width: ${width*0.9+'px'};
height: 200px;
align-self: center;
margin-top: 10px;
`;

export const FlatList = styled.FlatList`
margin-bottom: 3px;
`;
export const Image = styled.Image`
width: ${width*0.9+'px'};
height: 200px;
`;



export const IndicatorContainer = styled.View`
width: 60px;
align-self: center;
flex-direction: row;
justify-content: space-between;
`;


export const IndicatorItens = styled.View`
width: 10px;
height: 10px;
border-radius: 15px;
`;


