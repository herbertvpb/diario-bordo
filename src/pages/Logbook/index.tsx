import React from 'react';
import {Text, View } from 'react-native';
import CustomHeader from '../../components/CustomHeader';

// import { Container } from './styles';

const Logbook: React.FC = () => {
  return (
    <View>
      <CustomHeader />
      <Text>Logbook</Text>
    </View>
  );
}

export default Logbook;