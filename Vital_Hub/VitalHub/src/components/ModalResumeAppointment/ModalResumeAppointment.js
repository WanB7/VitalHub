import { Modal } from "react-native"
import { ContentModal, TextData, TitleData, ViewData, ViewModal } from "./Style"
import { ButtonTitle, SubTitleModalResume, TextUnderlined, TitleProfile } from "../Title/Style"
import { Button } from "../Button/Style"

export const ModalResumeAppointment = ({ dataConsulta,navigation, visible, setShowModalResume, ...rest }) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <ViewModal>
                <ContentModal>
                    <TitleProfile>Agendar Consulta</TitleProfile>

                    <SubTitleModalResume>Consulte os dados selecionados para a sua consulta</SubTitleModalResume>

                    <ViewData fieldHeight={50}>
                        <TitleData>Data da consulta</TitleData>
                        <TextData>{dataConsulta}</TextData>
                    </ViewData>
                    <ViewData fieldHeight={80}>
                        <TitleData>Médico(a) da consulta</TitleData>
                        <TextData>Dra Alessandra</TextData>
                        <TextData>Demartologa, Esteticista</TextData>
                    </ViewData>
                    <ViewData fieldHeight={50}>
                        <TitleData>Local da consulta</TitleData>
                        <TextData>São Paulo, SP</TextData>
                    </ViewData>
                    <ViewData fieldHeight={50}>
                        <TitleData>Tipo da consulta</TitleData>
                        <TextData>Rotina</TextData>
                    </ViewData>
                    <Button>
                        <ButtonTitle >CONFIRMAR</ButtonTitle>
                    </Button>

                    <TextUnderlined onPress={() => setShowModalResume(false)}>Cancelar</TextUnderlined>
                </ContentModal>
            </ViewModal>
        </Modal>
    )
}