import { Modal } from "react-native";
import {
  ContentAppointment,
  PatientPhoto,
  TextUnderlinedModal,
  TitleModal,
  ViewModalAppointment,
  ViewSubTitles,
} from "./Style";
import { SubTitle } from "../SubTitle/Style";
import { Button, ButtonTitle } from "../Button/Style";

const ModalAppointment = ({
  navigation,
  visible,
  setShowModalAppointment,
  ...rest
}) => {
  const onPressHandler = () => {
    navigation.navigate("InsertMedicalRecord");
    setShowModalAppointment(false);
  };

  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <ViewModalAppointment>
        <ContentAppointment>
          <PatientPhoto
            source={require("../../assets/img/RiosProfile.png")}
          />
          <TitleModal>Richard Rios</TitleModal>
          <ViewSubTitles>
            <SubTitle>23 anos</SubTitle>
            <SubTitle>Richard.rios@gmail.com</SubTitle>
          </ViewSubTitles>
          <Button onPress={() => onPressHandler()}>
            <ButtonTitle>INSERIR PRONTUÁRIO</ButtonTitle>
          </Button>
          <TextUnderlinedModal onPress={() => setShowModalAppointment(false)}>
            Cancelar
          </TextUnderlinedModal>
        </ContentAppointment>
      </ViewModalAppointment>
    </Modal>
  );
};

export default ModalAppointment;
