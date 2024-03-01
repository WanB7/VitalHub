import { Button, ButtonTitle } from "../../components/Button/Style";
import { Container } from "../../components/Container/Style";
import { ListComponent } from "../../components/List/Style";
import { ButtonSelect, Title } from "../SelectClinic/Style";
import { CardMedical } from "../../components/CardMedical/CardMedical"
import { TextUnderlined } from "../../components/Title/Style";

const Medicos = [
    { id: 1, nome: "Dr Hans chucrutes", Especialidade: "Demartologa, Esteticista", Foto: require("../../assets/img/DoctorHans.jpg") },
    { id: 2, nome: "Dr Paulo", Especialidade: "Cirurgião, Cardiologista", Foto: require("../../assets/img/medico.jpg") },
    { id: 3, nome: "Dr Tioky", Especialidade: "Clínico, Pediatra", Foto: require("../../assets/img/medico0003.jpg") },
    { id: 4, nome: "Dr Junin", Especialidade: "Oftamologista", Foto: require("../../assets/img/medica.jpg") },
]



export const SelectDoctor = ({ navigation }) => {

    const [selectedDoctor, setSelectedDoctor] = useState(null);

    return (
        <Container>
            <Title>Selecionar Medico</Title>

            {<ListComponent
                data={Medicos}
                renderItem={({ item }) =>
                (
                    <ButtonSelect onPress={() => setSelectedDoctor(item.id)}>
                        <CardMedical name={item.nome}
                            espec={item.Especialidade}
                            photo={item.Foto}
                            isSelected={item.id == selectedDoctor}
                        />
                    </ButtonSelect>
                )}
            />}

            <Button onPress={() => navigation.navigate("SelectDate")}>
                <ButtonTitle>CONTINUAR</ButtonTitle>
            </Button>
            <TextUnderlined onPress={() => { navigation.navigate("HomeUser") }}>Cancelar</TextUnderlined>
        </Container>
    )
}