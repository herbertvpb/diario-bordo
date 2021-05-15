import React, { useEffect } from 'react';
import { Button, HelperText, Paragraph, TextInput } from 'react-native-paper';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { fieldsValidationSchema } from './validation';
import { Form } from './styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// import { Container } from './styles';
interface IValidatePinFormInput {
  pinCode: string;
}

interface IProps {
  onFormSubmit: (form: IValidatePinFormInput) => void;
}

const ValidatePinForm: React.FC<IProps> = ({ onFormSubmit }) => {
  const { register, setValue, handleSubmit, formState: { errors } } = useForm<IValidatePinFormInput>({
    resolver: yupResolver(fieldsValidationSchema)
  });

  useEffect(() => {
    register('pinCode')
  }, [register])

  return (
    <Form>
      <Paragraph
        style={{
          fontSize: 15,
          color: Colors.white
        }}
      >
        Confirme o código enviado no seu email, para que possamos prosseguir com a recuperação.
      </Paragraph>

      <TextInput
        label={'Código'}
        placeholder={'000000'}
        error={!!errors.pinCode?.message}
        onChangeText={text => setValue('pinCode', text)}
        // mode="outlined"
        style={{
          backgroundColor: 'transparent'
        }}
        keyboardType="numeric"
      />
      <HelperText type="error" visible={!!errors.pinCode?.message}>
        {errors.pinCode?.message}
      </HelperText>

      <Button
        mode="contained"
        color={Colors.white}
        style={{
          margin: 16
        }}
        labelStyle={{ color: '#787878'}}
        onPress={handleSubmit(onFormSubmit)}
      >
        Continuar
      </Button>  
    </Form>
  );
}

export default ValidatePinForm;