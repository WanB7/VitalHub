import { Modal } from 'react-native';
import { ContentModal, ViewModal } from '../CancellationModal/Style';
import { TextUnderlined, Title } from '../Title/Style';
import { SubTitle } from '../SubTitle/Style';
import { Input } from '../Input/Style';
import { Button, ButtonTitle } from '../Button/Style';


const ScheduleConsultationModal = ({visible, navigate, setShowModalConsultation, ...rest}) => {
    const onPressHandler = () => {
        setShowModalConsultation(false);
    };

    return(
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <ViewModal>
                <ContentModal>
                    
                    <Title>Agendar consulta</Title>
                        <SubTitle>Informe o tipo de consulta</SubTitle> 

                        <Input
                            Placeholder='Tipo de consulta'
                        />

                        <SubTitle>Qual o nivel da consulta</SubTitle>
                            <Button>
                                <ButtonTitle>Rotina</ButtonTitle>
                            </Button>
                            <Button>
                                <ButtonTitle>Exame</ButtonTitle>
                            </Button>
                            <Button>
                                <ButtonTitle>Urgência</ButtonTitle>
                            </Button>
                        <SubTitle>Informe a localização desejada</SubTitle>

                        <Input
                            Placeholder='Informe a localização'
                        />
                            <Button onPress={() => onPressHandler()}>
                                <ButtonTitle>Continuar</ButtonTitle>
                            </Button>

                        <TextUnderlined onPress={() => setShowModalConsultation(false)}>Cancelar</TextUnderlined>
                </ContentModal>
            </ViewModal>
        </Modal>
    );
};

export default ScheduleConsultationModal;