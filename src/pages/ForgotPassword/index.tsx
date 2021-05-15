import React, { useCallback, useEffect, useState } from 'react';
import { IconButton, Paragraph, Snackbar, Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AuthContainer from '../../components/AuthContainer';
import { Form } from './styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import PasswordForm from './components/PasswordForm';
import SendPinForm from './components/SendPinForm';
import ValidatePinForm from './components/ValidatePinForm';

// import { Container } from './styles';

enum VisibleFormsEnum {
  SendPinForm = 'sendPinForm',
  ValidatePinForm = 'validatePinForm',
  PasswordForm = 'passwordForm',
}

const ForgotPassword: React.FC = () => {
  const { goBack } = useNavigation();
  const [visibleForm, setVisibleForm] = useState(VisibleFormsEnum.SendPinForm);
  const [snackVisible, setSnackVisible] = useState(false);

  const sendPinToEmail = (form: any) => {
    console.log({form});
    setSnackVisible(true);
    setVisibleForm(VisibleFormsEnum.ValidatePinForm);
  };

  const validatePin = (form: any) => {
    console.log({form});
    setVisibleForm(VisibleFormsEnum.PasswordForm);
  };

  const updatePassword = (form: any) => {
    console.log({form});
  };

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
        {visibleForm === VisibleFormsEnum.SendPinForm && (
            <SendPinForm onFormSubmit={sendPinToEmail} />
          )}
        {visibleForm === VisibleFormsEnum.ValidatePinForm && (
            <ValidatePinForm onFormSubmit={validatePin} />
          )}
        {visibleForm === VisibleFormsEnum.PasswordForm && (
          <PasswordForm onFormSubmit={updatePassword} />
        )}
      </Form>
      <Snackbar
        visible={snackVisible}
        duration={3000}
        style={{
          backgroundColor: '#98E316',
          margin: 16,
          paddingLeft: '15%',
        }}
        onDismiss={() => setSnackVisible(false)}
      >
        <Paragraph 
          style={{
            color: '#445525',
            alignSelf: 'center',
            fontWeight: 'bold',
            fontSize: 16,
          }}
        >
          Código enviado com sucesso!
        </Paragraph>
      </Snackbar>
    </AuthContainer>
  );
}

export default ForgotPassword;