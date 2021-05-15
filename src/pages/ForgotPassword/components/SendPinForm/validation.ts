
import * as yup from 'yup';

export const fieldsValidationSchema = yup.object().shape({
    email: yup
        .string()
        .required('O email não pode ser vazio')
        .email('Digite um email válido'),
}); 