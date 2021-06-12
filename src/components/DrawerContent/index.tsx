import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import {
  IconButton,
  Colors,
  Headline,
  Caption,
  Card,
  Avatar,
  Title,
  Button,
  Divider,
  Drawer,
} from 'react-native-paper';
import { useAuth } from '../../hooks/auth';
import { Dimensions, ScrollView } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import { Container, Header, Menu } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface DrawerContentProps extends DrawerContentComponentProps {
  showInfo?: boolean;
}

const menuOptions = [
  {
    label: 'Caderneta Individual de Voo',
    route: 'IndividualBook',
    icon: 'book-open-variant',
    type: 'navigate'
  },
  {
    label: 'Licenças',
    route: 'Licenses',
    icon: 'credit-card',
    type: 'navigate'
  },
  {
    label: 'Habilitações',
    route: 'Qualifications',
    icon: 'credit-card',
    type: 'navigate'
  },
  {
    label: 'Certificado Médico Aeronáutico',
    route: 'MedicalCertificate',
    icon: 'medical-bag',
    type: 'navigate'
  },
  {
    label: 'Aeronaves',
    route: 'Aircraft',
    icon: 'airplane',
    type: 'navigate'
  },
  {
    label: 'Diário de Bordo',
    route: 'Logbook',
    icon: 'book-open',
    type: 'navigate'
  },
]

const DrawerContent: React.FC<DrawerContentProps> = (props) => {
  const { dispatch, navigate } = props.navigation;
  const { signOut } = useAuth();
  const windowWidth = Dimensions.get('window').width;

  const toggleMenuDrawer = useCallback(() => {
    dispatch(DrawerActions.toggleDrawer);
  }, [dispatch]);

  return (
    <Container>
      <Card>
        <Header>
          <Avatar.Image
            size={windowWidth / 4}
            source={{
              uri: 'https://i1.wp.com/terracoeconomico.com.br/wp-content/uploads/2019/01/default-user-image.png?ssl=1'
            }}
          />
          <View
            style={{
              alignItems: 'flex-start',
              width: '58%',
            }}
          >
            <Title
              style={{
                fontSize:  16,
                paddingLeft: 16,
              }}
            >
              Luiz Eduardo de Almeida e Silva
            </Title>
            <Button
              icon="account-circle"
              mode="text"
              color="#808080"
              onPress={() => navigate('EditProfile')}
            >
              Editar perfil
            </Button>
          </View>
          <TouchableOpacity
            onPress={toggleMenuDrawer}
          >
            <Icon
              name="chevron-left"
              color="#808080"
              size={24} 
            />
          </TouchableOpacity>
        </Header>
      </Card>


      <Menu>
      <ScrollView>
        <Divider />
        {menuOptions.map((item, index) => (
          <View key={item.route}>
            <Button
              icon={item.icon}
              style={{
                height: 48,
                justifyContent: 'center',
              }}
              mode="text"
              color="#808080"
              contentStyle={{ justifyContent: 'flex-start' }}
              onPress={() => {
                if (item.type === 'logout') {
                  signOut()
                } 
                if (item.type === 'navigate') {
                  navigate(item.route)
                }
              }}
            >
              {item.label}
            </Button>
            <Divider />
          </View>
        ))}
      </ScrollView>
      <View>
        <Divider />
        <Button
          icon="key"
          style={{
            height: 48,
            justifyContent: 'center',
          }}
          mode="text"
          color="#808080"
          contentStyle={{ justifyContent: 'flex-start' }}
          onPress={() => {}}
        >
          Alterar Senha
        </Button>
        <Divider />
        <Button
          icon="exit-to-app"
          style={{
            height: 48,
            justifyContent: 'center',
          }}
          mode="text"
          color="#808080"
          contentStyle={{ justifyContent: 'flex-start' }}
          onPress={() => signOut()}
        >
          Sair
        </Button>
        <Divider />
      </View>
      </Menu>
    </Container>
  );
}

export default DrawerContent;