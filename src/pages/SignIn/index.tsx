import React, { useCallback, useEffect } from 'react';
import { Alert, Image } from 'react-native';
import { Button, HelperText, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AuthContainer from '../../components/AuthContainer';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { fieldsValidationSchema } from './validation';
import { Form } from './styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// import { Container } from './styles';
interface IFormInput {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { navigate } = useNavigation();

  const { register, setValue, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(fieldsValidationSchema)
  });

  const navigateToSignUp = useCallback(() => {
    navigate('SignUp');
  }, [navigate]);

  const navigateToForgotPassword = useCallback(() => {
    navigate('ForgotPassword');
  }, [navigate]);

  const onSubmit = (data: any) => Alert.alert(data.email, data.password);

  useEffect(() => {
    register('email')
    register('password')
  }, [register])

  return (
    <AuthContainer>
      <Form>
        <Image
          style={{
            width: 233,
            height: 233,
            alignSelf: 'center',
            marginTop: '20%',
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
        />
        <HelperText type="error" visible={!!errors.password?.message}>
          {errors.password?.message}
        </HelperText>
        <Button
          style={{ alignSelf: 'flex-end'}}
          color={Colors.white}
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
          onPress={handleSubmit(onSubmit)}
        >
          Entrar
        </Button>  
      </Form>
      
      <Button
        mode="text"
        onPress={navigateToSignUp}
        color={Colors.white}
        style={{
          marginTop: '50%'
        }}
      >
        Não é cadastrado? Cadastre-se aqui.
      </Button>
    </AuthContainer>
  );
}

export default SignIn;