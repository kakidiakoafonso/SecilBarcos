import React,{useState} from 'react'
import { AntDesign ,SimpleLineIcons} from '@expo/vector-icons';
import Search from '../../components/Search/Search'
import Selection from '../../components/Selection/Selection'
import Slider from '../../components/Slider/Slider'
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import { Container, Center, DateContainer, TextoPartida, 
    TextoDia, TextoMesSemana, InfoContainer, Box, 
    BoxSeparator, Texto, Titulo, LeftButton, 
    ButtonReservar,ButtonReservarTexto} from './styled'
import cores, { sombra } from '../../utils/style/cores';

const dados = [1,2,3]

const img ='https://www.cruiseindustrynews.com/images/stories/wire/2020/dec/world_europa1.jpg'
export default function Reserva() 
{
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);
  
    const closeMenu = () => setVisible(false);
    return (
        <Provider>
        <Container>
            <Search/>

            <Slider/>
            <Selection tipo='origin'/>
            <Selection tipo='destino'/>
            
            <Center style={sombra}>

                <DateContainer>
                    <TextoPartida>Partida</TextoPartida>
                    <TextoDia>26</TextoDia>
                    <TextoMesSemana>
                        Out {`\n`}
                        Terca feira
                        </TextoMesSemana>
                </DateContainer>
                {/* <InfoContainer>
                    <Box>
                        <Titulo>VIAJANTE </Titulo>
                        <Texto>1 adulto</Texto>
                        
                        <LeftButton>
                            <AntDesign name="down" size={25} color={cores.primarary}/>
                        </LeftButton>
                                             
                                {/* <Menu
                                    visible={visible}
                                    onDismiss={closeMenu}
                                    anchor={
                                    <Button onPress={openMenu} style={
                                        {
                                            backgroundColor:'red',
                                            width: 40, position: 'absolute',
                                            right: 0, bottom: 10
                                        }}>   
                                        <AntDesign name="down" size={25} color={cores.primarary}/>
                                    </Button>}>
                                    <Menu.Item onPress={() => {}} title="Item 1" />
                                    <Menu.Item onPress={() => {}} title="Item 2" />
                                    <Divider />
                                    <Menu.Item onPress={() => {}} title="Item 3" />
                                </Menu> 
                    </Box>
                    <BoxSeparator/>
                    <Box style={{paddingLeft:10}}>
                        <Titulo>CLASSE </Titulo>
                        <Texto>Economica</Texto>

                        <LeftButton>
                            <AntDesign name="down" size={25} color={cores.primarary}/>
                        </LeftButton>
                    </Box>


                </InfoContainer> */}

            </Center>

            <ButtonReservar>
                <ButtonReservarTexto>
                    FAZER RESERVA
                </ButtonReservarTexto>
            </ButtonReservar>
            
        </Container>
        </Provider>
    )
}
