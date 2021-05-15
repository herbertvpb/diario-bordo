import React, { useCallback, useEffect } from 'react';
import { Alert, Image } from 'react-native';
import { Button, HelperText, IconButton, Paragraph, TextInput, Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AuthContainer from '../../components/AuthContainer';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { fieldsValidationSchema } from './validation';
import { Form } from './styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import SimpleHeader from '../../components/SimpleHeader';

// import { Container } from './styles';
interface IFormInput {
  name: string;
  document: string;
  anacCode: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp: React.FC = () => {
  const { goBack } = useNavigation();

  const { register, setValue, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(fieldsValidationSchema)
  });

  const onSubmit = (data: any) => Alert.alert(data.email, data.password);

  useEffect(() => {
    register('name')
    register('document')
    register('anacCode')
    register('email')
    register('password')
    register('confirmPassword')
  }, [register])

  return (
    <AuthContainer>
      <SimpleHeader />
      <Form>
        <Title
          style={{
            fontSize: 28,
            color: Colors.white
          }}
        >
          Crie uma nova conta
        </Title>
        <Paragraph
          style={{
            fontSize: 15,
            color: Colors.white
          }}
        >
          Informe os dados solicitados para se registrar gratuitamente no sistema.
        </Paragraph>
        <TextInput
          label={'Nome'}
          placeholder={'Alberto Santos-Dumont'}
          error={!!errors.name?.message}
          onChangeText={text => setValue('name', text)}
          // mode="outlined"
          style={{
            backgroundColor: 'transparent'
          }}
        />
        <HelperText type="error" visible={!!errors.name?.message}>
          {errors.name?.message}
        </HelperText>
        <TextInput
          label={'CPF'}
          placeholder={'000.000.000-00'}
          error={!!errors.document?.message}
          onChangeText={text => setValue('document', text)}
          // mode="outlined"
          style={{
            backgroundColor: 'transparent'
          }}
          keyboardType="numeric"
          maxLength={11}
        />
        <HelperText type="error" visible={!!errors.document?.message}>
          {errors.document?.message}
        </HelperText>
        <TextInput
          label={'Código ANAC'}
          placeholder={'000000'}
          error={!!errors.anacCode?.message}
          onChangeText={text => setValue('anacCode', text)}
          // mode="outlined"
          style={{
            backgroundColor: 'transparent'
          }}
          keyboardType="numeric"
          maxLength={6}
        />
        <HelperText type="error" visible={!!errors.anacCode?.message}>
          {errors.anacCode?.message}
        </HelperText>
        <TextInput
          label={'Email'}
          placeholder={'alberto@email.com'}
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
          placeholder={'Mínimo de 8 caracteres'}
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
        <TextInput
          label={'Confirme sua senha'}
          placeholder={'Mínimo de 8 caracteres'}
          error={!!errors.confirmPassword?.message}
          onChangeText={text => setValue('confirmPassword', text)}
          // mode="outlined"
          style={{
            backgroundColor: 'transparent'
          }}
          secureTextEntry
        />
        <HelperText type="error" visible={!!errors.confirmPassword?.message}>
          {errors.confirmPassword?.message}
        </HelperText>

        <Paragraph
          style={{
            fontSize: 15,
            color: Colors.white,
            textAlign: 'center'
          }}
        >
          Ao clicar em "Registrar", você concorda com os nossos Termos e Condições.
        </Paragraph>

        <Button
          mode="contained"
          color={Colors.white}
          style={{
            margin: 16
          }}
          labelStyle={{ color: '#787878'}}
          onPress={handleSubmit(onSubmit)}
        >
          Registrar
        </Button>  
      </Form>
    </AuthContainer>
  );
}

export default SignUp;