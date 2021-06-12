import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
console.log({width});

export const Form = styled.ScrollView`
    padding: 0px ${width < 400 ? '16px' : '36px'};
`;
