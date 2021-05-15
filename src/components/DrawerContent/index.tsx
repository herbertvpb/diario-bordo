import React, { useCallback } from 'react';
import { Image, View } from 'react-native';
import { IconButton, Colors, Headline, Caption, Card, Avatar, Title, Button, Divider } from 'react-native-paper';

import { Container, Header, Menu } from './styles';

interface DrawerContentProps {
  showInfo?: boolean;
}

const menuOptions = [
  {
    label: 'Caderneta Individual de Voo',
    route: '',
    icon: 'menu-book'
  },
  {
    label: 'Licenças',
    route: '',
    icon: 'credit-card'
  },
  {
    label: 'Habilitações',
    route: '',
    icon: 'credit-card'
  },
  {
    label: 'Certificado Médico Aeronáutico',
    route: '',
    icon: 'plus'
  },
  {
    label: 'Aeronaves',
    route: '',
    icon: 'plus'
  },
  {
    label: 'Diário de Bordo',
    route: '',
    icon: 'plus'
  },
  {
    label: 'Alterar Senha',
    route: '',
    icon: 'plus'
  },
  {
    label: 'Sair',
    route: '',
    icon: 'plus'
  },
]

const DrawerContent: React.FC<DrawerContentProps> = ({ showInfo = false }) => {
  
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
              onPress={() => console.log('Pressed')}
            >
              Editar perfil
            </Button>
          </View>
          <IconButton
            icon="chevron-left"
            color="#808080"
            size={30}
            onPress={() => {}}
          />
        </Header>
      </Card>
      <Menu>
        <Divider />
        {menuOptions.map((item) => (
          <>
            <Button
              key={item.route}
              icon={item.icon}
              mode="text"
              color="#808080"
              contentStyle={{ justifyContent: 'flex-start'}}
              onPress={() => console.log('Pressed')}
            >
              {item.label}
            </Button>
            <Divider />
          </>
        ))}
      </Menu>
    </Container>
  );
}

export default DrawerContent;