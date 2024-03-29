import styled from "styled-components";

export const ContentIcon = styled.View`
flex-direction: row;
justify-content: center;
align-items: center;
gap: 7px;

border-radius: 18px;
padding: 9px 12px;
background-color: ${props => `${props.tabBarActiveBackgroundColor}`};

`


export const TextIcon = styled.Text`
font-size: 16px;
font-family: 'Quicksand_500Medium';
color: #607EC5;
`