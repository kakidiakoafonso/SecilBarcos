import React,{useState} from 'react'
import Search from '../../components/Search/Search'
import Selection from '../../components/Selection/Selection'
import Slider from '../../components/Slider/Slider'
import * as S from './styled'
import cores, { sombra } from '../../utils/style/cores';
import ReservaModal from '../../components/ModalReservar/Modal'
import { ActivityIndicator} from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import ModalTerminal from '../../components/ModalTerminal/Modal'

const dados = [1,2,3]
const months = ["janeiro", "Fevereiro", "Março", "Abril", "Maio", 
"Junho", "Julho", "Agosto", "Setembro", "Outobro", "Novembro", "Dezembro"];

const weekday = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"]
const img ='https://www.cruiseindustrynews.com/images/stories/wire/2020/dec/world_europa1.jpg'
export default function Reserva() 
{
    const [visible, setVisible] = useState(false);
    const [terminalModalVisible, setterminalModalVisible] = useState(false);
    const [loading, setloading] = useState(false);
    const [DataAtual, setDataAtual] = useState(new Date());
    

    const handleReservar = () => 
    {
        setloading(true)

        setTimeout(() => {
            setloading(false)
            setVisible(true)
        }, 1500);
    }

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date:Date) => {
        console.log(date.getDay())
        
        setDataAtual(date)
        hideDatePicker();
    };

   
    return (
        <S.Container>
            <Search placeholder='Pesquisar rotas' redirectSearch/>

            <Slider/>
            <Selection tipo='origin' onPress={()=>setterminalModalVisible(true)}/>
            <Selection tipo='destino' onPress={()=>setterminalModalVisible(true)}/>
            
            {/* <Center style={sombra}> */}
            <S.Center onPress={showDatePicker}>

                <S.DateContainer>
                    <S.TextoPartida>Partida</S.TextoPartida>
                    <S.TextoDia>{DataAtual.getDate()}</S.TextoDia>
                    <S.TextoMesSemana>
                        {months[DataAtual.getMonth()].toLocaleUpperCase()}
                        {`\n`}
                        {weekday[DataAtual.getDay()]} 
                    </S.TextoMesSemana>
                </S.DateContainer>

                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                    locale='pt_BR'
                    date={new Date()}
                    minimumDate={new Date()}
                />
                            
            </S.Center>

            <S.ButtonReservar onPress={handleReservar}>
                {
                    loading?
                    <ActivityIndicator size="large" color={cores.primarary80} />
                    :
                    <S.ButtonReservarTexto>
                        FAZER RESERVA
                    </S.ButtonReservarTexto>
                }
            </S.ButtonReservar>
            <ReservaModal message='Reservado'
                modalOpen={visible} 
                closeModal={()=>setVisible(false)}/>

            <ModalTerminal message='Reservado'
                modalOpen={terminalModalVisible} 
                closeModal={()=>setterminalModalVisible(false)}/>
        </S.Container>
    )
}
