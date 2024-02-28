import { ContainerHeader } from "../Container/Style";
import { BoxUser, DataUser, ImageUser, NameUser, TextDefault } from "./Style";


export const HeaderP = () => {
    return (
      <ContainerHeader>
          <BoxUser>
            <ImageUser source={require("../../assets/img/RiosProfile.png")}/>
            <DataUser>
              <TextDefault>Bem vindo</TextDefault>
              <NameUser>Richard Rios</NameUser>
            </DataUser>
          </BoxUser>

      
      </ContainerHeader>
    );
  };