import React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import AircraftSelectorModal from '../../components/AircraftSelectorModal';
import CustomFAB from '../../components/CustomFAB';
import CustomHeader from '../../components/CustomHeader';

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  const [aircraftModalIsOpen, setAircraftModalIsOpen] = useState(false);

  const handleAircraftModal = () => {
    setAircraftModalIsOpen(prev => !prev);
  } 
  
  return (
    <View>
      <CustomFAB />
      <CustomHeader showInfo={true} handleAircraftModal={handleAircraftModal}/>
      <AircraftSelectorModal
        visible={aircraftModalIsOpen}
        onDismiss={handleAircraftModal}
      />
    </View>
  );
}

export default Dashboard;