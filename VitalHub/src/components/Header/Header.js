import { CalendarHome } from "../CalendarHome/CalendarHome";
import { ContainerHeader } from "../Container/Style";
import { BoxUser, DataUser, ImageUser, NameUser, NotifyContainer, TextDefault } from "./Style";
import { MaterialIcons } from "@expo/vector-icons";

export const Header = ({name}) => {
  return (
    <ContainerHeader>
        <BoxUser>
          <ImageUser source={require("../../assets/img/RiosProfile.png")}/>
          <DataUser>
            <TextDefault>Bem vindo</TextDefault>
            <NameUser>{name}</NameUser>
          </DataUser>
        </BoxUser>

        {/* material icons */}
        <MaterialIcons name="notifications" size={25} color="#fbfbfb" />
    
    </ContainerHeader>
  );
};