import React from 'react';
import { View, StyleSheet } from 'react-native';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import theme from './styles/defaultTheme';
import { StatusBar } from 'expo-status-bar';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <AppProvider>
        <PaperProvider theme={theme}>
          <Routes />
        </PaperProvider>
      </AppProvider>
    </NavigationContainer>
  );
}

export default registerRootComponent(App);