import React from 'react';
import { Caption, Colors, Divider, Modal, Portal, RadioButton, Subheading, Text, Title } from 'react-native-paper';

import { AircraftOption } from './styles';

interface AircraftSelectorModalProps {
  visible: boolean;
  onDismiss: () => void;
}

const AircraftSelectorModal: React.FC<AircraftSelectorModalProps> = ({
  visible,
  onDismiss
}) => {  
  const [aircraft, setAircraft] = React.useState('PTXXXXC151');

  const options = [
    {
      label: 'PT-XXXX | C151',
      key: 'PTXXXXC151',
    },
    {
      label: 'PT-XXXX | C152',
      key: 'PTXXXXC152',
    },
    {
      label: 'PT-XXXX | C153',
      key: 'PTXXXXC153',
    },
  ]

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={{
          backgroundColor: 'white',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          padding: 20,
          minHeight: 200,
          justifyContent: 'flex-start',
        }}
        style={{
          justifyContent: 'flex-end',
        }}
      >
        <Caption
          style={{
            fontSize: 24,
            color: Colors.black,
            padding: 5
          }}
        >
          Selecione a aeronave
        </Caption>

        <RadioButton.Group onValueChange={newValue => setAircraft(newValue)} value={aircraft}>
          {options.map(option => (
            <>
              <AircraftOption key={option.key}>
                <Text>{option.label}</Text>
                <RadioButton value={option.label} color="#1AD1FF"/>
              </AircraftOption>
              <Divider />
            </>
          ))}
        </RadioButton.Group>
      </Modal>
    </Portal>
  );
}

export default AircraftSelectorModal;