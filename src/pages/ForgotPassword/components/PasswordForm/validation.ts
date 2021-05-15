
import * as yup from 'yup';

export const fieldsValidationSchema = yup.object().shape({
    password: yup
        .string()
        .required('A senha não pode ser vazia')
        .min(8, 'A senha deve conter pelo menos 8 dígitos'),
    confirmPassword: yup
        .string()
        .required('A senha não pode ser vazia')
        .min(8, 'A senha deve conter pelo menos 8 dígitos')
}); 