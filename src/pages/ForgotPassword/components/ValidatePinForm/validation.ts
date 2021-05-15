
import * as yup from 'yup';

export const fieldsValidationSchema = yup.object().shape({
    pinCode: yup
        .number()
        .required('O código não pode ser vazio')
        .min(6, 'O código deve conter pelo menos 6 dígitos'),
}); 