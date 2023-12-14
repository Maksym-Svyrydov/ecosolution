import { useFormik } from 'formik';

import { nanoid } from 'nanoid';

import { schemas } from '../schemas/schema';
import { Layout, FormContainer, ButtonSubmit } from './Form.styled';

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(values);
  actions.resetForm();
};

const FormSection = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      id: nanoid(),
      name: '',
      phone: '',
      email: '',
      message: '',
    },
    validationSchema: schemas,
    onSubmit,
  });

  return (
    <Layout>
      <FormContainer onSubmit={handleSubmit} autoComplete="on">
        <label htmlFor="name">* Full name:</label>
        <input
          id="name"
          placeholder="John Rosie"
          type="text"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            (errors.name && touched.name ? 'input-error' : '', 'input')
          }
        />
        <div className="error-wrapper">
          {errors.name && touched.name && (
            <p className="error">{errors.name}</p>
          )}
        </div>
        <label htmlFor="email">* E-mail:</label>
        <input
          value={values.email}
          onChange={handleChange}
          id="email"
          type="email"
          placeholder="johnrosie@gmail.com"
          onBlur={handleBlur}
          className={
            (errors.email && touched.email ? 'input-error' : '', 'input')
          }
        />
        <div className="error-wrapper">
          {errors.email && touched.email && (
            <p className="error">{errors.email}</p>
          )}
        </div>
        <label htmlFor="phone">* Phone:</label>
        <input
          id="phone"
          type="tel"
          placeholder="380961234567"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            (errors.phone && touched.phone ? 'input-error' : '', 'input')
          }
        />
        <div className="error-wrapper">
          {errors.phone && touched.phone && (
            <p className="error">{errors.phone}</p>
          )}
        </div>
        {/* text area */}

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          type="text"
          placeholder="My message...."
          rows={8}
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            (errors.message && touched.message ? 'input-error' : '', 'input')
          }
        />
        {errors.message && touched.message && (
          <p className="error">{errors.message}</p>
        )}
        <ButtonSubmit disabled={isSubmitting} type="submit">
          <span>Send</span>
          <p className="main-link--btn">
            <svg
              className="main-link--arrow"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.62012 4.45312L13.6668 8.49979L9.62012 12.5465"
                stroke="none"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.3335 8.5H13.5535"
                stroke="none"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </p>
        </ButtonSubmit>
      </FormContainer>
    </Layout>
  );
};
export default FormSection;
