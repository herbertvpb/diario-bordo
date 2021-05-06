import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

import { Container, Image } from './styles';

const AuthContainer: React.FC = ({ children }) => {
  return (
      <Container>
        <Image resizeMode="cover" source={require('../../assets/background.png')}>
            {children}
        </Image>
      </Container>
  );
}

export default AuthContainer;