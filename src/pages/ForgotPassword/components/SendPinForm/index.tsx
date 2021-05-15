import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import { Button, HelperText, Paragraph, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { fieldsValidationSchema } from './validation';
import { Form } from './styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// import { Container } from './styles';
interface ISendPinFormInput {
  email: string;
}

interface IProps {
  onFormSubmit: (form: ISendPinFormInput) => void;
}

const SendPinForm: React.FC<IProps> = ({ onFormSubmit }) => {
  const { register, setValue, handleSubmit, formState: { errors } } = useForm<ISendPinFormInput>({
    resolver: yupResolver(fieldsValidationSchema)
  });

  useEffect(() => {
    register('email')
  }, [register])

  return (
    <Form>
      <Paragraph
        style={{
          fontSize: 15,
          color: Colors.white
        }}
      >
        Confirme o seu email para que possamos te enviar o código de recuperação.
      </Paragraph>
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
        Enviar
      </Button>
    </Form>
  );
}

export default SendPinForm;