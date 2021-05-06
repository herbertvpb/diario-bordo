import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

export const Container = styled(Card)`
    background-color: #1AD1FF;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-top-color: rgba(52, 52, 52, 0.8);
`;

export const Header = styled(Card.Content)`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 32px;
    padding-left: 4px;
    padding-right: 4px;
    padding-bottom: 8px;
`
export const TotalHours = styled(Card.Content)`
    padding-top: 18px;
    align-items: center;
    justify-content: space-around;
`

