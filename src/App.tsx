import React from 'react';
import { View, StyleSheet } from 'react-native';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import theme from './styles/defaultTheme';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <Routes />
      </PaperProvider>
    </NavigationContainer>
  );
}

export default registerRootComponent(App);