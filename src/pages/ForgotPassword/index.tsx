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

// import { Container } from './styles';
interface IFormInput {
  name: string;
  document: string;
  pinCode: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const ForgotPassword: React.FC = () => {
  const { goBack } = useNavigation();

  const { register, setValue, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(fieldsValidationSchema)
  });

  const onSubmit = (data: any) => Alert.alert(data.email, data.password);

  useEffect(() => {
    register('pinCode')
    register('email')
    register('password')
    register('confirmPassword')
  }, [register])

  return (
    <AuthContainer>
      <IconButton
        icon="close"
        style={{ alignSelf: 'flex-end', marginRight: 16}}
        color={Colors.white}
        size={30}
        onPress={goBack}
      />
      <Form>
        <Title
          style={{
            fontSize: 28,
            color: Colors.white,
            marginBottom: 16
          }}
        >
          Esqueceu sua senha?
        </Title>
        <Paragraph
          style={{
            fontSize: 15,
            color: Colors.white
          }}
        >
          Não se preocupe, o processo de recuperação é simples e rápido, siga os passos abaixo.
        </Paragraph>
        <Paragraph
          style={{
            fontSize: 15,
            color: Colors.white
          }}
        >
          Confirme o seu email para que possamos te enviar o código de recuperação.
        </Paragraph>
{/* 
        <TextInput
          label={'Código'}
          placeholder={'000000'}
          error={!!errors.pinCode?.message}
          onChangeText={text => setValue('pinCode', text)}
          // mode="outlined"
          style={{
            backgroundColor: 'transparent'
          }}
        />
        <HelperText type="error" visible={!!errors.pinCode?.message}>
          {errors.pinCode?.message}
        </HelperText> */}



        <TextInput
          label={'Email'}
          placeholder={'alberto@email.com'}
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


        {/* <TextInput
          label={'Senha'}
          placeholder={'Mínimo de 8 caracteres'}
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
        <TextInput
          label={'Confirme sua senha'}
          placeholder={'Mínimo de 8 caracteres'}
          error={!!errors.confirmPassword?.message}
          onChangeText={text => setValue('confirmPassword', text)}
          // mode="outlined"
          style={{
            backgroundColor: 'transparent'
          }}
        />
        <HelperText type="error" visible={!!errors.confirmPassword?.message}>
          {errors.confirmPassword?.message}
        </HelperText> */}

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

export default ForgotPassword;