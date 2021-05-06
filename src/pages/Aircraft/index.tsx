import React from 'react';
import {Text, View } from 'react-native';
import CustomHeader from '../../components/CustomHeader';

// import { Container } from './styles';

const Aircraft: React.FC = () => {
  return (
    <View>
      <CustomHeader />
      <Text>Aircraft</Text>
    </View>
  );
}

export default Aircraft;