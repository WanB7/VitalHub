import { useState } from "react";
import { ButtonHome } from "../../components/ButtonHome/ButtonHome";
import { CalendarHome } from "../../components/CalendarHome/CalendarHome";
import { Container } from "../../components/Container/Style";
import { BoxButtonHome } from "../Home/Style";
import { HeaderP } from "../../components/Header/HeaderP";
import { FontAwesome5 } from '@expo/vector-icons';
import ScheduleConsultationModal from "../../components/ScheduleConsultationModal/ScheduleConsultationModal";
import { ListComponent } from "../../components/List/Style";
import { Card } from "../../components/Card/Card";
import CancellationModal from "../../components/CancellationModal/CancellationModal";
import { ViewIcon } from "../../components/View/View";
import { TouchableOpacity } from "react-native";

const Consultas = [
  { id: 1, nome: "Dr. Hans", situacao: "pendente"},
  { id: 2, nome: "Dr. Tioky", situacao: "cancelado"},
  { id: 3, nome: "Dr. Juciane", situacao: "realizado"},
];

export const ConsultP = ({navigation}) => {

  const [statusList, setStatusList] = useState("pendente");
  const [showModalCancel, setShowModalCancel] = useState(false);
  const [showModalConsultation, setShowModalConsultation] = useState(false);

    return(
        <Container>
      <HeaderP />

      <ViewIcon>
        <TouchableOpacity onPress={() => setShowModalConsultation(true)}>
            <FontAwesome5 name={"stethoscope"} size={30} color={"white"}/>
        </TouchableOpacity>
      </ViewIcon>
      
      <CalendarHome />

      <BoxButtonHome>
        <ButtonHome
          textButton={"Pendente"}
          clickButton={statusList === "pendente"}
          onPress={() => setStatusList("pendente")}
        />

        <ButtonHome
          textButton={"Realizadas"}
          clickButton={statusList === "realizado"}
          onPress={() => setStatusList("realizado")}
        />

        <ButtonHome
          textButton={"Canceladas"}
          clickButton={statusList === "cancelado"}
          onPress={() => setStatusList("cancelado")}
        />
      </BoxButtonHome>

      <ListComponent
                data={Consultas}
                keyExtractor={(item) => item.id}

                renderItem={({ item }) =>
                    statusList == item.situacao && (
                        <Card nome= {item.nome} situacao={item.situacao}
                        onPressCancel={() => setShowModalCancel(true)}
                        onPressAppointment={() => setShowModalConsultation(true)}
                        />
                    )}
        />

      <CancellationModal
        visible={showModalCancel}
        setShowModalCancel={setShowModalCancel}
      />

      <ScheduleConsultationModal
        visible={showModalConsultation}
        setShowModalConsultation={setShowModalConsultation}
      />
      
    </Container>
    );
};