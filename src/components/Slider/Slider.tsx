import React, { useEffect, useState } from 'react'
import {  ImageBackground,ScrollView,  } from 'react-native'
import cores from '../../utils/style/cores'
import { Dimensions } from "react-native";

import { Container , IndicatorContainer, IndicatorItens, 
    FlatList,Image} from './Styled'
const img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXBIQbiEz4e3dK44ivY7BhZ5IEwQHo1J1GBA&usqp=CAU'

const {width} = Dimensions.get('screen')

const sliderWidth = width*0.9
export default function Slider() 
{
    const [Dados, setDados] = useState([1,2,3])
    const [activeIndex, setactiveIndex] = useState<number>(0)
    
    return (
        <Container>
                <FlatList
                    data={Dados}
                    pagingEnabled
                    keyExtractor={e=>String(e)}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={event=>{
                        let pos = event.nativeEvent.contentOffset.x
                        console.log(pos);
                        setactiveIndex(pos/sliderWidth)
                        console.log(activeIndex);
                        console.log('pos/const'+pos/sliderWidth);
                        
                        
                        
                    }}
                    renderItem={({item})=>(
                        <Image source={{uri:img}}/>
                    )}
                />

                <IndicatorContainer>
                    {
                        Dados.map((item,key)=>(
                            <IndicatorItens key={key} 
                                style={{backgroundColor: activeIndex==key? cores.primarary80 :cores.dark}}/>
                        ))
                    }
                    
                </IndicatorContainer>
           
        </Container>
    )
}

