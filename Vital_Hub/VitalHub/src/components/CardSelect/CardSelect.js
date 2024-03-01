import { AntDesign } from '@expo/vector-icons';
import { Container, TextAv, TextCalendar, TextLoc, TextName, View1, View2, ViewCalendar, ViewStar } from './Styled';

export const CardSelect = ({ name, loc, aval, date, isSelected }) => {
    return (
        
        <Container isSelected={isSelected}>
        <View1>
            <TextName>{name}</TextName>
            <TextLoc>{loc}</TextLoc>
        </View1>
        <View2>
            <ViewStar>
                <AntDesign name="star" size={20} color="#F9A620" />
                <TextAv>{aval}</TextAv>
            </ViewStar>
            <ViewCalendar>
                <AntDesign name="calendar" size={15} color="#49B3BA" />
                <TextCalendar>{date}</TextCalendar>
            </ViewCalendar>

        </View2>
    </Container>

    )
}