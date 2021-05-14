
import * as yup from 'yup';

export const fieldsValidationSchema = yup.object().shape({
    name: yup
        .string()
        .required('O nome não pode ser vazio'),
    document: yup
        .string()
        .required('O CPF não pode ser vazio'),
    anacCode: yup
        .string()
        .required('O código ANAC não pode ser vazio'),
    email: yup
        .string()
        .required('O email não pode ser vazio')
        .email('Digite um email válido'),
    password: yup
        .string()
        .required('A senha não pode ser vazia')
        .min(8, 'A senha deve conter pelo menos 8 dígitos'),
    confirmPassword: yup
        .string()
        .required('A senha não pode ser vazia')
        .min(8, 'A senha deve conter pelo menos 8 dígitos')
}); 