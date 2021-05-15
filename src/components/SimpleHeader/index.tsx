import React, { useCallback } from 'react';
import { Image, View } from 'react-native';
import { IconButton, Colors, Headline, Caption, Card } from 'react-native-paper';

import { Container, Header, TotalHours } from './styles';
import { DrawerActions, useNavigation } from '@react-navigation/native';

interface SimpleHeaderProps {
  showInfo?: boolean;
}

const SimpleHeader: React.FC<SimpleHeaderProps> = ({ showInfo = false }) => {
  const { goBack } = useNavigation();
  
  return (
    <View
      style={{
        paddingTop: 32,
        paddingBottom: 8,
      }}
    >
      <IconButton
        icon="close"
        style={{ alignSelf: 'flex-end', marginRight: 16}}
        color={Colors.white}
        size={30}
        onPress={goBack}
      />
    </View>
  );
}

export default SimpleHeader;