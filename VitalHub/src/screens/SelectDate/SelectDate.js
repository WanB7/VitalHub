import { useState } from "react";
import { ButtonFull, ContainerSelectDate, LabelSchedule } from "./Style";
import { TextCancel, TitleSelect } from "../SelectClinic/Style";
import FullCalender from "../../components/CalendarSelectDate/CalendarSelectDate";
import InputSelect from "../../components/InputSelect/InputSelect";
import { ButtonTitle } from "../../components/Button/Style";
import ModalConfirmAppointment from "../../components/ModalConfirmAppointment/ModalConfirmAppointment";

export const SelectDate = ({navigation}) => {
    const [selectedDate, setSelectedDate] = useState();
    const [selectedTime, setSelectedTime] = useState();

    const Horarios = ["10:30","12:00","12:30","13:00","17:15","17:45","19:00"]  

    const [showModalConfirm, setShowModalConfirm] = useState(false)

    return (

            <ContainerSelectDate>
                <TitleSelect>Selecionar Data</TitleSelect>
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

            <ButtonFull onPress={() => {setShowModalConfirm(true)}}>
                <ButtonTitle>CONFIRMAR</ButtonTitle>
            </ButtonFull>

            <ModalConfirmAppointment
                visible={showModalConfirm}
                navigation={navigation}
                setShowModalConfirm={setShowModalConfirm}
                dataConsulta={selectedDate}
                horarioConsulta={selectedTime}
            />

            <TextCancel onPress={() => {navigation.navigate("HomeUser")}}>Cancelar</TextCancel>
        </ContainerSelectDate>
    )
}