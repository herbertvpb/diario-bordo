import { DrawerContentComponentProps, DrawerItem } from '@react-navigation/drawer';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Image, View } from 'react-native';
import { IconButton, Colors, Headline, Caption, Card, Avatar, Title, Button, Divider, Drawer } from 'react-native-paper';
import { useAuth } from '../../hooks/auth';

import { Container, Header, Menu } from './styles';

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
  {
    label: 'Alterar Senha',
    route: '',
    icon: 'key',
    type: 'password'
  },
  {
    label: 'Sair',
    route: '',
    icon: 'exit-to-app',
    type: 'logout'
  },
]

const DrawerContent: React.FC<DrawerContentProps> = (props) => {
  const { dispatch, navigate } = props.navigation;
  const { signOut } = useAuth();

  const toggleMenuDrawer = useCallback(() => {
    dispatch(DrawerActions.toggleDrawer);
  }, [dispatch]);
  
  return (
    <Container>
      <Card>
        <Header>
          <Avatar.Image
            size={100}
            source={{
              uri: 'https://i1.wp.com/terracoeconomico.com.br/wp-content/uploads/2019/01/default-user-image.png?ssl=1'
            }}
          />
          <View
            style={{
              width: '55%',
              alignItems: 'flex-start',
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
              onPress={() => {}}
            >
              Editar perfil
            </Button>
          </View>
          <IconButton
            icon="chevron-left"
            color="#808080"
            size={32}
            onPress={toggleMenuDrawer}
          />
        </Header>
      </Card>
      <Menu>
        <Divider />
        {menuOptions.map((item, index) => (
          <>
            <Button
              key={item.route}
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
            {index === 3 && <Divider style={{ marginTop: 32 }}/>}
            {index === 5 && <Divider style={{ marginTop: '72%' }}/>}
          </>
        ))}
      </Menu>
    </Container>
  );
}

export default DrawerContent;