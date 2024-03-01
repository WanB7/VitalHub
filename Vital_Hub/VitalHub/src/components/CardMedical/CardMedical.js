import { ProfileImage } from "../Card/Style"
import { TextName } from "../CardClinic/Style"
import { Container, TextEspec, ViewData } from "./Style"

export const CardMedical = ({name, espec, photo, isSelected}) => {
    return(
        <Container isSelected={isSelected}>
            <ProfileImage source={photo}/>
            <ViewData>
                <TextName>{name}</TextName>
                <TextEspec>{espec}</TextEspec>
            </ViewData>
        </Container>
    )
}