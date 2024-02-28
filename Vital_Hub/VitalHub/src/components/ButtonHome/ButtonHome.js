import { ButtonTab, ButtonText } from "./Style"

export const ButtonHome = ({clickButton = false, textButton, onPress}) => {
    return(
        <ButtonTab clickButton={clickButton} onPress={onPress}>
            <ButtonText clickButton={clickButton}>{textButton}</ButtonText>
        </ButtonTab>
    )
}