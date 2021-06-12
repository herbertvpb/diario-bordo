import React, { useCallback, useEffect } from 'react';
import { Alert, Image, Dimensions } from 'react-native';
import { Button, HelperText, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AuthContainer from '../../components/AuthContainer';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { fieldsValidationSchema } from './validation';
import { Form } from './styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useAuth } from '../../hooks/auth';

// import { Container } from './styles';
interface IFormInput {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { navigate } = useNavigation();
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  const { register, setValue, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(fieldsValidationSchema)
  });

  const navigateToSignUp = useCallback(() => {
    navigate('SignUp');
  }, [navigate]);

  const navigateToForgotPassword = useCallback(() => {
    navigate('ForgotPassword');
  }, [navigate]);

  const { signIn } = useAuth();

  const handleSignIn = useCallback(
    async (data: IFormInput) => {
      try {
        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, cheque as credenciais.',
        );
      }
    },
    [signIn],
  );

  useEffect(() => {
    register('email')
    register('password')
  }, [register])

  return (
    <AuthContainer>
      <Form>
        <Image
          style={{
            width: windowHeight * 0.25,
            height: windowHeight * 0.25,
            alignSelf: 'center',
            marginTop: windowHeight * 0.08,
          }}
          source={require('../../assets/small-logo.png')}
        />
        <TextInput
          label={'Email'}
          placeholder={'Digite seu email'}
          error={!!errors.email?.message}
          onChangeText={text => setValue('email', text)}
          // mode="outlined"
          style={{
            backgroundColor: 'transparent'
          }}
          keyboardType="email-address"
        />
        <HelperText type="error" visible={!!errors.email?.message}>
          {errors.email?.message}
        </HelperText>
        <TextInput
          label={'Senha'}
          placeholder={'Digite sua senha'}
          error={!!errors.password?.message}
          onChangeText={text => setValue('password', text)}
          // mode="outlined"
          style={{
            backgroundColor: 'transparent'
          }}
          secureTextEntry
        />
        <HelperText type="error" visible={!!errors.password?.message}>
          {errors.password?.message}
        </HelperText>
        <Button
          style={{ alignSelf: 'flex-end'}}
          color={Colors.white}
          uppercase={false}
          labelStyle={{
            fontSize: windowWidth < 400 ? 12 : 14
          }}
          mode="text"
          onPress={navigateToForgotPassword}
        >
          Esqueceu sua senha?
        </Button>
        <Button
          mode="contained"
          color={Colors.white}
          style={{
            margin: 16
          }}
          labelStyle={{ color: '#787878'}}
          onPress={handleSubmit(handleSignIn)}
        >
          Entrar
        </Button>        
        <Button
          mode="text"
          uppercase={false}
          labelStyle={{
            fontSize: windowWidth < 400 ? 12 : 14
          }}
          onPress={navigateToSignUp}
          color={Colors.white}
          style={{
            marginTop: windowHeight < 600 ? 48 : windowHeight * 0.3
          }}
        >
          Não é cadastrado? Cadastre-se aqui.
        </Button>
      </Form>
    </AuthContainer>
  );
}

export default SignIn;