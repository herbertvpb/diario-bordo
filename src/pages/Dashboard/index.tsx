import React from 'react';
import { Text, View } from 'react-native';
import { Button, FAB, Portal } from 'react-native-paper';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CustomHeader from '../../components/CustomHeader';
import { useAuth } from '../../hooks/auth';

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }: any) => setState({ open });

  const { open } = state;

  return (
    <View>
      <Portal>
        <FAB.Group
          visible={true}
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
      <Button onPress={signOut}>Sair da aplicação</Button>
    </View>
  );
}

export default Dashboard;