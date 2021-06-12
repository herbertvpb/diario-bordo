import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export const Form = styled.ScrollView`
    padding: 16px ${width < 400 ? '16px' : '36px'};
    margin-bottom: 16px;
`;
