import React, { useCallback, useEffect } from 'react';
import { Alert, Image, View, Dimensions } from 'react-native';
import { Button, HelperText, IconButton, Paragraph, Subheading, TextInput, Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { fieldsValidationSchema } from './validation';
import { Form } from './styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CustomHeader from '../../components/CustomHeader';

// import { Container } from './styles';
interface IFormInput {
  name: string;
  document: string;
  anacCode: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const EditProfile: React.FC = () => {
  const { goBack } = useNavigation();
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

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
    <View>
      <CustomHeader showRightButton={false}/>
      <View style={{
        height: windowHeight < 600 ? windowHeight * 0.85 : windowHeight * 0.9,
      }}>
      <Form>
        <Subheading
          style={{
            paddingTop: 8,
            fontSize: 28,
            color: Colors.black,
          }}
        >
          Editar Perfil
        </Subheading>
        <Paragraph
          style={{
            fontSize: 15,
            color: Colors.black
          }}
        >
          Mantenha as suas informações pessoais sempre atualizadas.
        </Paragraph>
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
          label={'Data de nascimento'}
          placeholder={''}
          // error={!!errors.name?.message}
          // onChangeText={text => setValue('name', text)}
          style={{
            backgroundColor: 'transparent'
          }}
        />
        {/* <HelperText type="error" visible={!!errors.name?.message}>
          {errors.name?.message}
        </HelperText> */}
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
          label={'RG'}
          placeholder={'00.000.000'}
          // error={!!errors.document?.message}
          // onChangeText={text => setValue('document', text)}
          // mode="outlined"
          style={{
            backgroundColor: 'transparent'
          }}
          keyboardType="numeric"
          // maxLength={11}
        />
        {/* <HelperText type="error" visible={!!errors.document?.message}>
          {errors.document?.message}
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
          keyboardType="email-address"
        />
        <HelperText type="error" visible={!!errors.email?.message}>
          {errors.email?.message}
        </HelperText>
        <TextInput
          label={'Telefone'}
          placeholder={'00000-0000'}
          // error={!!errors.document?.message}
          // onChangeText={text => setValue('document', text)}
          // mode="outlined"
          style={{
            backgroundColor: 'transparent'
          }}
          keyboardType="numeric"
          // maxLength={11}
        />
        {/* <HelperText type="error" visible={!!errors.document?.message}>
          {errors.document?.message}
        </HelperText> */}

        <TextInput
          label={'CEP'}
          placeholder={'00.000.000'}
          // error={!!errors.document?.message}
          // onChangeText={text => setValue('document', text)}
          // mode="outlined"
          style={{
            backgroundColor: 'transparent'
          }}
          keyboardType="numeric"
          // maxLength={11}
        />
        {/* <HelperText type="error" visible={!!errors.document?.message}>
          {errors.document?.message}
        </HelperText> */}
        <TextInput
          label={'Logradouro'}
          placeholder={''}
          // error={!!errors.name?.message}
          // onChangeText={text => setValue('name', text)}
          // mode="outlined"
          style={{
            backgroundColor: 'transparent'
          }}
        />
        {/* <HelperText type="error" visible={!!errors.name?.message}>
          {errors.name?.message}
        </HelperText> */}
        <TextInput
          label={'Número'}
          placeholder={'00.000.000'}
          // error={!!errors.document?.message}
          // onChangeText={text => setValue('document', text)}
          // mode="outlined"
          style={{
            backgroundColor: 'transparent'
          }}
          keyboardType="numeric"
          // maxLength={11}
        />
        {/* <HelperText type="error" visible={!!errors.document?.message}>
          {errors.document?.message}
        </HelperText> */}
        <TextInput
          label={'Complemento'}
          placeholder={''}
          // error={!!errors.name?.message}
          // onChangeText={text => setValue('name', text)}
          // mode="outlined"
          style={{
            backgroundColor: 'transparent'
          }}
        />
        {/* <HelperText type="error" visible={!!errors.name?.message}>
          {errors.name?.message}
        </HelperText> */}
        <TextInput
          label={'Bairro'}
          placeholder={''}
          // error={!!errors.name?.message}
          // onChangeText={text => setValue('name', text)}
          // mode="outlined"
          style={{
            backgroundColor: 'transparent'
          }}
        />
        {/* <HelperText type="error" visible={!!errors.name?.message}>
          {errors.name?.message}
        </HelperText> */}
        <TextInput
          label={'Cidade'}
          placeholder={''}
          // error={!!errors.name?.message}
          // onChangeText={text => setValue('name', text)}
          // mode="outlined"
          style={{
            backgroundColor: 'transparent'
          }}
        />
        {/* <HelperText type="error" visible={!!errors.name?.message}>
          {errors.name?.message}
        </HelperText> */}
        <TextInput
          label={'Estado'}
          placeholder={''}
          // error={!!errors.name?.message}
          // onChangeText={text => setValue('name', text)}
          // mode="outlined"
          style={{
            backgroundColor: 'transparent'
          }}
        />
        {/* <HelperText type="error" visible={!!errors.name?.message}>
          {errors.name?.message}
        </HelperText> */}


        <Button
          mode="contained"
          color="#17C3EE"
          style={{
            margin: 32
          }}
          labelStyle={{ color: Colors.white }}
          onPress={handleSubmit(onSubmit)}
        >
          Salvar
        </Button>
      </Form>
      </View>
    </View>
  );
}

export default EditProfile;