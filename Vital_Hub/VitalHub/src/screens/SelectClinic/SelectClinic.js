import { useState } from "react";
import { Button, ButtonTitle } from "../../components/Button/Style";
import { CardSelect } from "../../components/CardSelect/CardSelect";
import { Container } from "../../components/Container/Style";
import { ListComponent } from "../../components/List/Style";
import { TextUnderlined, Title } from "../../components/Title/Style";
import { ButtonSelect } from "./Style";

const Clinicas = [
    { id: 1, nome: "Clínica Natureh",Localizacao: "São Paulo, SP",Avaliacao: "4,5", Abertura: "Seg-Sex"},
    { id: 2, nome: "Diamond Pró-Mulher",Localizacao: "São Paulo, SP",Avaliacao: "4,8", Abertura: "Seg-Sex"},
    { id: 3, nome: "Clinica Villa Lobos", Localizacao: "Taboão, SP",Avaliacao: "4,2", Abertura: "Seg-Sab"}, 
    { id: 4, nome: "SP Oncologia Clínica", Localizacao: "Taboão, SP",Avaliacao: "4,2", Abertura: "Seg-Sab" }, 
]

export const SelectClinic = ({navigation}) => {

    const [selectedClinic, setSelectedClinic] = useState(null);


    return(
        <Container>
            <Title>Selecionar clinica</Title>

                { <ListComponent 
                data={Clinicas}
                renderItem={({ item }) =>
                      (
                        <ButtonSelect  onPress={() => setSelectedClinic(item.id)}>
                        <CardSelect name={item.nome}
                                    loc={item.Localizacao}
                                    aval={item.Avaliacao}
                                    date={item.Abertura}
                                    isSelected={item.id == selectedClinic}
                        
                        />
                        </ButtonSelect>
                    )}
                /> }

            <Button onPress={() => {navigation.navigate("SelectDoctor")}}>
                <ButtonTitle >CONTINUAR</ButtonTitle>
            </Button>
            <TextUnderlined onPress={() => {navigation.navigate("HomeUser")}}>Cancelar</TextUnderlined>
        </Container>


    )
}