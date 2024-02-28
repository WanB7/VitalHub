import { CalendarHome } from "../CalendarHome/CalendarHome";
import { ContainerHeader } from "../Container/Style";
import { BoxUser, DataUser, ImageUser, NameUser, NotifyContainer, TextDefault } from "./Style";
import { MaterialIcons } from "@expo/vector-icons";

export const Header = () => {
  return (
    <ContainerHeader>
        <BoxUser>
          <ImageUser source={require("../../assets/img/DoctorHans.jpg")}/>
          <DataUser>
            <TextDefault>Bem vindo</TextDefault>
            <NameUser>Dr. Hans</NameUser>
          </DataUser>
        </BoxUser>

        {/* material icons */}
        <MaterialIcons name="notifications" size={25} color="#fbfbfb" />
    
    </ContainerHeader>
  );
};