import * as yup from 'yup';

const userSchema = yup.object().shape({
  firstName: yup.string().required('Nome obrigatório'),
  lastName: yup.string().required('Sobrenome obrigatório'),
  address: yup.object().shape({
    state: yup.string().required('Estado obrigatório'),
    district: yup.string().required('Bairro obrigatório'),
    city: yup.string().required('Cidade obrigatório'),
    street: yup
      .string()
      .trim()
      .matches(/^[a-zA-z 0-9]{8,}/, 'Digite um endereço valído')
      .required('Endereço obrigatório'),
  }),
  age: yup.number().min(15, 'Idade minima: 15').required('Idade obrigatório'),
  cpf: yup.string()
    .trim()
    .matches(/\d{3}[.]\d{3}[.]\d{3}[-]\d{2}/i, 'Digite um cpf valído')
    .required('CPF obrigatório'),
});

export const userInitialValues = {
  id: -1,
  firstName: '',
  lastName: '',
  address: {
    state: '',
    district: '',
    city: '',
    street: '',
  },
  age: '',
  cpf: '',
};

export default userSchema;
