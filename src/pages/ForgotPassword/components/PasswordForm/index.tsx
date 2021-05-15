import React, { useCallback, useEffect } from 'react';
import { Alert } from 'react-native';
import { Button, HelperText, Paragraph, TextInput } from 'react-native-paper';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { fieldsValidationSchema } from './validation';
import { Form } from './styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface IPasswordFormInput {
  password: string;
  confirmPassword: string;
}

interface IProps {
  onFormSubmit: (form: IPasswordFormInput) => void;
}

const PasswordForm: React.FC<IProps> = ({ onFormSubmit }) => {
  const { register, setValue, handleSubmit, formState: { errors } } = useForm<IPasswordFormInput>({
    resolver: yupResolver(fieldsValidationSchema)
  });

  useEffect(() => {
    register('password')
    register('confirmPassword')
  }, [register])

  return (
    <Form>
      <Paragraph
        style={{
          fontSize: 15,
          color: Colors.white
        }}
      >
        Escolha a sua nova senha.
      </Paragraph>
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

      <Button
        mode="contained"
        color={Colors.white}
        style={{
          marginTop: 24,
          width: 200,
          alignSelf: 'center',
        }}
        labelStyle={{ color: '#787878'}}
        onPress={handleSubmit(onFormSubmit)}
      >
        Alterar
      </Button>  
    </Form>
  );
}

export default PasswordForm;