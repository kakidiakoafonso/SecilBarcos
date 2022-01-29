import React,{useState} from 'react';
import Search from '../../components/Search/Search';
import * as S from './styled';
import { Entypo,AntDesign  } from '@expo/vector-icons';
import cores, { sombra } from '../../utils/style/cores';

export default function Agencia() {
    const [searching, setsearching] = useState(false);
  return (
    <S.Container>
        <Search placeholder="Pesquisar agências"/>

        <S.Content>
            <S.FilterContainer>
                <S.Button>
                    <S.TextButton>Ver todos</S.TextButton>
                </S.Button>
                <S.FilterButton>
                    <AntDesign name="filter" size={24} color="#fff" />
                </S.FilterButton>
            </S.FilterContainer>


            <S.ContainerFlatList>


            <S.FlatList
            data={[1,2,3,4,5,6,7,8]}
            keyExtractor={e=>String(e)}
            renderItem={()=>
                
                searching?
                
                <S.SearchItems style={{borderBottomWidth:1,
                    borderBottomColor:cores.primarary}}>
                        <S.TextSearch>Ilha de luanda</S.TextSearch>
                        <S.IconSearch style={{transform:[{ rotate: '-45deg' }]}}>
                            <AntDesign name="arrowup" size={20} color={cores.grey} />
                        </S.IconSearch>
                </S.SearchItems>
                :
                <S.Wrapper activeOpacity={0.7} style={sombra}>
                    <S.Row>
                        <S.IconContainer>
                            <Entypo name="location-pin" size={26} color={cores.primarary80} />
                        </S.IconContainer>
                        <S.Textos>Luanda - Cacuaco </S.Textos>
                    </S.Row>
                    <S.Row>
                        <S.Descricao>
                            Lorem ipsum dolor sit amet incidunt officia temp
                        </S.Descricao>
                    </S.Row>
                </S.Wrapper>
                
                
            }           
                />


            </S.ContainerFlatList>
            
        </S.Content>
        
    </S.Container>
  );
}
