import React, { useCallback } from 'react';
import { Image, View } from 'react-native';
import { IconButton, Colors, Headline, Caption, Card } from 'react-native-paper';

import { Container, Header, TotalHours } from './styles';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface CustomHeaderProps {
  showInfo?: boolean;
  showRightButton?: boolean;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ showInfo = false, showRightButton = true }) => {
  const { dispatch, navigate } = useNavigation();

  const toggleMenuDrawer = useCallback(() => {
    dispatch(DrawerActions.toggleDrawer);
  }, [dispatch]);
  
  return (
    <Container style={{
      borderBottomLeftRadius: showInfo ? 20 : 0,
      borderBottomRightRadius: showInfo ? 20 : 0,
    }}>
      <Header>
        <IconButton
          icon="menu"
          color={Colors.white}
          size={24}
          onPress={toggleMenuDrawer}
        />
        <TouchableOpacity
          onPress={() => navigate('Dashboard')}
        >
          <Image
            style={{ width: 35, height: 35 }}
            source={require('../../assets/small-logo.png')}
          />
        </TouchableOpacity>
        {showRightButton ? (
          <IconButton
            icon="airplane"
            color={Colors.white}
            size={24}
            onPress={() => console.log('Pressed')}
          />
        ) : (
          <View style={{ width: 48 }}></View>
        )}
      </Header>
      {showInfo && (
        <TotalHours>
          <Headline style={{ fontSize: 35, color: Colors.white, paddingTop: 2 }}>
            PR-XXXX
          </Headline>
          <Caption style={{ fontSize: 16, color: Colors.white, paddingTop: 2 }}>
            Horas totais
          </Caption>
          <Caption style={{ fontSize: 48, color: Colors.white, paddingTop: 28}}>
            1126:20
          </Caption>
        </TotalHours>
      )}
    </Container>
  );
}

export default CustomHeader;