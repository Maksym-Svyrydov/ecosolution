import * as yup from 'yup';

const nameRegEx = /^[a-zA-Z ]+$/;
const phoneRegEx = /^3?8?(0\d{9})$/;
const emailRegEx =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const schemas = yup.object().shape({
  name: yup
    .string()
    .matches(nameRegEx, { message: 'Wrong Fullname' })
    .required('Required'),
  email: yup
    .string()
    .matches(emailRegEx, { message: 'Wrong Email' })
    .required('Required'),
  phone: yup
    .string()
    .min(12, 'Wrong Phone')
    .max(12, 'Wrong Phone')
    .matches(phoneRegEx, { message: 'Wrong Phone' })
    .required('Required'),
});
