import { Modal } from "react-native";
import { Button, ButtonTitle } from "../Button/Style"
import { ContentModal, ViewModal } from "../CancellationModal/Style"
import { SubTitle } from "../SubTitle/Style"
import { TextUnderlined, Title } from "../Title/Style"
import { ImageModal } from "../Images/Style";
import { ViewSubTitle } from "../Container/Style";

const MedicalRecordModal = ({ visible, navigation, setShowModalAppointment, ...rest }) => {
    const onPressHandler = () => {
        navigation.navigate("MedicalRecord");
        setShowModalAppointment(false);
    };

    return(
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <ViewModal>
                <ContentModal>
                    <ImageModal source={require('../../assets/img/RiosProfile.png')}/>
                    <Title>Richard Rios</Title>
                        <ViewSubTitle>
                            <SubTitle>23 Anos</SubTitle> 
                            <SubTitle>Richard.rios@gmail.com</SubTitle>
                        </ViewSubTitle>
                            <Button onPress={() => onPressHandler()}>
                                <ButtonTitle>Inserir Prontuário</ButtonTitle>
                            </Button>
                        <TextUnderlined onPress={() => setShowModalAppointment(false)}>Cancelar</TextUnderlined>
                </ContentModal>
            </ViewModal>
        </Modal>
    );
};

export default MedicalRecordModal;