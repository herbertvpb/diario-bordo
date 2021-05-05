import React, { useCallback } from 'react';
import {Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

const SignIn: React.FC = () => {
  const { navigate } = useNavigation();


  const navigateToSignUp = useCallback(() => {
    navigate('SignUp');
  }, [navigate]);

  const navigateToForgotPassword = useCallback(() => {
    navigate('ForgotPassword');
  }, [navigate]);

  return (
    <View>
      <Text>SignIn</Text>
      <Button icon="camera" mode="contained" onPress={() => {}}>
        Entrar
      </Button>
      <Button mode="text" onPress={navigateToSignUp}>
        Não é cadastrado? Cadastre-se aqui.
      </Button>
      <Button mode="text" onPress={navigateToForgotPassword}>
        Esqueceu sua senha?
      </Button>
    </View>
  );
}

export default SignIn;