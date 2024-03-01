import { useState } from "react";
import { ContainerSelectDate } from "../../components/Container/Style"
import { Title } from "../SelectClinic/Style"
import { ButtonTitle, LabelSchedule, TextUnderlined } from "../../components/Title/Style";
import InputSelect from "../../components/InputSelect/Styled";
import { ButtonFull } from "../../components/Button/Style";
import { ModalResumeAppointment } from "../../components/ModalResumeAppointment/ModalResumeAppointment";
import FullCalender from "../../components/CalendarSelectDate/CalendarSelectDate";

export const SelectDate = ({navigation}) => {
    const [selectedDate, setSelectedDate] = useState();
    const [selectedTime, setSelectedTime] = useState();

    const Horarios = ["10:30","12:00","12:30","13:00","17:15","17:45","19:00"]  

    const [showModalResume, setShowModalResume] = useState(false)

    return (
        
            <ContainerSelectDate>
                <Title>Selecionar Data</Title>
                <FullCalender
                    selectedDate={selectedDate}
                    handleSelectedDateFn={setSelectedDate}
                />
                <LabelSchedule>Selecione um horário disponível</LabelSchedule>

                <InputSelect
                textButton='Selecionar horário'
                handleSelectedFn={setSelectedTime}
                data={Horarios}
                />
            
            <ButtonFull onPress={() => {setShowModalResume(true)}} >
                <ButtonTitle>CONFIRMAR</ButtonTitle>
            </ButtonFull>

                <ModalResumeAppointment
                visible={showModalResume}
                navigation={navigation}
                setShowModalResume={setShowModalResume}
                dataConsulta={selectedDate}
                />

            <TextUnderlined onPress={() => {navigation.navigate("HomeUser")}}>Cancelar</TextUnderlined>
        </ContainerSelectDate>
    )
}