import { Button } from "../../components/Button/Style";
import { ButtonText } from "../../components/Card/Style";
import { Container } from "../../components/Container/Style";
import { TextUnderlined, Title } from "../../components/Title/Style";

export const SelectMedical = () => {
    return(
        <Container>
            <Title>Selecionar Médcio</Title>

            <Button>
                <ButtonText>Continuar</ButtonText>
            </Button>

            <TextUnderlined>Cancelar</TextUnderlined>
        </Container>
    );
}