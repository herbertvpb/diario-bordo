import React, { useCallback } from 'react';
import { Image, View, Dimensions } from 'react-native';
import { IconButton, Colors, Headline, Caption, Card } from 'react-native-paper';

import { Container, Header, TotalHours } from './styles';
import { DrawerActions, useNavigation } from '@react-navigation/native';

interface SimpleHeaderProps {
  showInfo?: boolean;
}

const SimpleHeader: React.FC<SimpleHeaderProps> = ({ showInfo = false }) => {
  const { goBack } = useNavigation();
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
  
  return (
    <View
      style={{
        paddingTop: windowHeight * 0.03,
        paddingBottom: 8,
      }}
    >
      <IconButton
        icon="close"
        style={{
          alignSelf: 'flex-end',
          marginRight: windowWidth <= 400 ? 4 : 16,
        }}
        color={Colors.white}
        size={30}
        onPress={goBack}
      />
    </View>
  );
}

export default SimpleHeader;