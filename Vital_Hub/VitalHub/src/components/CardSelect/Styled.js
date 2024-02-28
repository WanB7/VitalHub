import styled from "styled-components";
import { Title } from "../Title/Style";


export const ContainerCardSelect = styled.View`
width: 90%;
height: 120px;
flex-direction: row;
border-radius: 7px;
gap: 10px;
background-color:#fff ;
box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.08);
align-self: center;
margin-bottom: 20px;
`

export const ProfileImage = styled.Image`
    height: 80%;
    width: 80px;
    align-self: center;
    border-radius: 7px;
    margin-left: 15px;
`   

export const ContentSelectCard = styled.View`
width: 100%;
height: 80%;
align-self: center;
border-radius: 7px;
border: 1px;
`

export const DataProfileSelect = styled.View`
height: 80%;
justify-content: space-evenly;
left: 18px;
margin-top: 10px;
`
export const ProfileName = styled(Title)`
font-size: 16px;
`

export const ProfileData = styled.View`
flex-direction: row;
gap: 10px;
align-items: center;
`

export const TextAge = styled.Text`
font-size: 15px;
color: #8c8a97;
font-family: 'Quicksand_400Regular';
`

export const TextBoldSelect = styled(TextAge)`
font-family: 'Quicksand_600SemiBold';
color: #49B3BA;
`
export const TextBoldStar = styled(TextAge)`
font-family: 'Quicksand_600SemiBold';
color: #F9A620;
`

export const ViewRow = styled.View`
height: 40%;
flex-direction: row;
padding-right: 25px;
align-items: flex-end;
justify-content: space-between;
`

export const ClockCardS = styled.View`
background-color: #E8FCFD ;
height: 25px;
width: 100px;
flex-direction: row;
justify-content: center;
gap: 10px;
align-items: center;
border-radius: 5px;
`

export const ButtonCard = styled.TouchableOpacity`

`

export const ButtonText = styled.Text`
font-size: 16px;
`

export const ImagePoint = styled.Image`
width: 5px;
height: 5px;
`