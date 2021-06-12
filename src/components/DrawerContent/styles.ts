import { Card } from 'react-native-paper';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
const marginTop = Math.trunc(height * 0.024);

export const Container = styled.View`
    width: ${`${width < 400 ? width : width * 0.85}px`};
`;

export const Header = styled(Card.Content)`    
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: ${`${marginTop}px`};
    height: 148px;
`

export const Menu = styled.View`
    height: ${`${height - marginTop - 148}px`};
    padding-top: 16px;
    flex-direction: column;
    justify-content: space-between;
`;




