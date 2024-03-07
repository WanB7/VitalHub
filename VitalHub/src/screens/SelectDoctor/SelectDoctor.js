import { useState } from "react"
import { Container } from "../../components/Container/Style";
import { TextCancel, TitleSelect } from "../SelectClinic/Style";
import { ListComponent } from "../../components/List/Style";
import { TouchableOpacity } from "react-native";
import { CardDoctor } from "../../components/CardDoctor/CardDoctor";
import { ButtonDoctor } from "./Style.js";
import { ButtonTitle } from "../../components/Button/Style.js";

const Medicos = [
    { id: 1, nome: "Dr Hans chucrutes", Especialidade: "Demartologa, Esteticista", Foto: require("../../assets/img/DoctorHans.jpg") },
    { id: 2, nome: "Dra Paula", Especialidade: "Cirurgião, Cardiologista", Foto: require("../../assets/img/medico.jpg") },
    { id: 3, nome: "Dr Tioky", Especialidade: "Clínico, Pediatra", Foto: require("../../assets/img/medico0003.jpg") },
    { id: 4, nome: "Dr Junin", Especialidade: "Oftamologista", Foto: require("../../assets/img/medica.jpg") },
]

export const SelectDoctor = ({ navigation }) => {

    const [selectedDoctor, setSelectedDoctor] = useState(null);

    return (
        <Container>
            <TitleSelect>Selecionar Medico</TitleSelect>

            {<ListComponent
                data={Medicos}
                renderItem={({ item }) =>
                (
                    <TouchableOpacity onPress={() => setSelectedDoctor(item.id)}>
                        <CardDoctor name={item.nome}
                            espec={item.Especialidade}
                            photo={item.Foto}
                            isSelected={item.id == selectedDoctor}
                        />
                    </TouchableOpacity>
                )}
            />}

            <ButtonDoctor onPress ={() => navigation.navigate("SelectDate")}>
                <ButtonTitle>CONTINUAR</ButtonTitle>
            </ButtonDoctor>
            <TextCancel onPress={() => { navigation.navigate("UserHome") }}>Cancelar</TextCancel>
        </Container>
    )
}