import { useIsDrawerOpen } from '@react-navigation/drawer';
import { useNavigationState } from '@react-navigation/native';
import React from 'react';
import { Colors, FAB, Portal } from 'react-native-paper';

interface CustomFABProps {}

const CustomFAB: React.FC<CustomFABProps> = () => {
  const isDrawerOpen = useIsDrawerOpen();
  const route = useNavigationState(state => state);

  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }: any) => setState({ open });

  const { open } = state;
    
  return (
    <Portal>
        <FAB.Group
          visible={!isDrawerOpen && route.index === 0}
          open={open}
          icon={open ? 'close' : 'plus'}
          fabStyle={{
            backgroundColor: '#17C3EE'
          }}
          color={Colors.white}
          actions={[
            {
              icon: 'airplane',
              // label: 'Remind',
              style: {
                backgroundColor: '#DE3535'
              },
              onPress: () => console.log('Pressed airplane'),
              small: false,
            },
            {
              icon: 'airplane-takeoff',
              // label: 'Remind',
              style: {
                backgroundColor: '#0F9529'
              },
              onPress: () => console.log('Pressed notifications'),
              small: false,
            },
            {
              icon: 'book-open-variant',
              // label: 'Remind',
              style: {
                backgroundColor: '#000000'
              },
              onPress: () => console.log('Pressed notifications'),
              small: false,
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
  );
}

export default CustomFAB;