import { Modal } from "react-native"
import { Subtitle1, TextData, TitleData, ViewData } from "./Style"
import { ButtonTitle, TextUnderlined } from "../Title/Style"
import { ButtonModal, TitleModal, ViewContent, ViewModalSchedule } from "../ModalSchedule/Style"

const ModalConfirmAppointment = ({ dataConsulta, horarioConsulta, navigation, visible, setShowModalConfirm, ...rest }) => {

    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <ViewModalSchedule>
                <ViewContent>
                    <TitleModal>Agendar Consulta</TitleModal>

                    <Subtitle1>Consulte os dados selecionados para a sua consulta</Subtitle1>
                    
                        <TitleData>Data da consulta</TitleData>
                        <TextData>{dataConsulta} {horarioConsulta}</TextData>
                    
                        <TitleData>Médico(a) da consulta</TitleData>
                        <TextData>Dra Alessandra</TextData>
                        <TextData>Demartologa, Esteticista</TextData>
                    
                        <TitleData>Local da consulta</TitleData>
                        <TextData>São Paulo, SP</TextData>
                    
                        <TitleData>Tipo da consulta</TitleData>
                        <TextData>Rotina</TextData>
                    
                    <ButtonModal>
                        <ButtonTitle>CONFIRMAR</ButtonTitle>
                    </ButtonModal>

                    <TextUnderlined onPress={() => setShowModalConfirm(false)}>Cancelar</TextUnderlined>
                </ViewContent>
            </ViewModalSchedule>
        </Modal>
    )
}

export default ModalConfirmAppointment;