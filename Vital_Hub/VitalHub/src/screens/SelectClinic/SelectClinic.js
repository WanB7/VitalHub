import { Button, ButtonTitle } from "../../components/Button/Style";
import { Card } from "../../components/CardSelect/CardSelect";
import { Container } from "../../components/Container/Style";
import { TextUnderlined, Title } from "../../components/Title/Style";

export const SelectClinic = () => {
    return(
        <Container>
            <Title>Selecionar clinica</Title>

                <Card></Card>

            <Button>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>

            <TextUnderlined>Cancelar</TextUnderlined>
        </Container>
    );
};