import { useIsDrawerOpen } from '@react-navigation/drawer';
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { FAB, Portal } from 'react-native-paper';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CustomHeader from '../../components/CustomHeader';

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  const isDrawerOpen = useIsDrawerOpen();
  const route = useRoute();

  console.log({route: route})
  
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }: any) => setState({ open });

  const { open } = state;

  return (
    <View>
      <Portal>
        <FAB.Group
          visible={!isDrawerOpen && route.name === 'Dashboard'}
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
      <CustomHeader showInfo={true}/>
    </View>
  );
}

export default Dashboard;