import { ProfileName, TextAge, ViewRow } from '../Card/Style'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { ViewCardSelect, ViewRow1 } from '../View/View';
import { ClockCardS, ContainerCardSelect, ContentSelectCard, DataProfileSelect, TextBoldSelect, TextBoldStar, } from './Styled';

export const Card = () => {
    return (
        <ContainerCardSelect>

            <ContentSelectCard>
                <DataProfileSelect>
                    <ProfileName>Clinica natureh</ProfileName>
                        <TextAge>São Paulo</TextAge>
                </DataProfileSelect>  

                <ViewCardSelect>
                    <ViewRow1>
                        <AntDesign name="star" size={24} color={'#F9A620'}/>
                        <TextBoldStar>4,5</TextBoldStar>
                    </ViewRow1>

                    <ViewRow>
                        <ClockCardS>
                            <MaterialCommunityIcons name="calendar" size={24} color={'#49B3BA'} />
                            <TextBoldSelect>seg-sex</TextBoldSelect>
                        </ClockCardS>
                    </ViewRow>
                </ViewCardSelect>
            </ContentSelectCard>

        </ContainerCardSelect>
    )
}