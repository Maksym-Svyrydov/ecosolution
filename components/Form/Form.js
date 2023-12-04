import { Formik, Form } from 'formik';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import { Layout, InputContainer, Input, ButtonSubmit } from './Form.styled';

const StyledContainer = styled(ToastContainer)`
  .Toastify__toast {
    color: #f5f2f0;
    background: #283340;
    border: 3px solid #cbbe9c;
    border-radius: 12px;
  }
  .Toastify__progress-bar {
    background: #cbbe9c;
    height: 10px;
  }
  svg {
    fill: #cbbe9c;
  }
`;
const FormSection = () => {
  async function handleSubmit(values, onSubmitProps) {
    const notify = () => {
      toast.success(
        `Thank you ${values.user} for your request! We will definitely contact you soon!`
      );
    };
    const data = {
      id: values.id,
      user: values.user,
      phone: values.phone,
      email: values.email,
      details: values.details,
    };
    console.log(data);
    onSubmitProps.resetForm();
    notify();
    //  try {
    //    const response = await fetch('/api/email', {
    //      method: 'POST',
    //      body: JSON.stringify(data),
    //      headers: {
    //        'Content-Type': 'application/json',
    //      },
    //    });
    //    if (!response.ok) {
    //      throw new Error('HTTP error! status:' + response.status);
    //    }
    //    const responseData = await response.json();
    //    console.log('responseData:', responseData);
    //    onSubmitProps.resetForm();
    //    notify();
    //  } catch (error) {
    //    console.log(error.message);
    //  }
  }
  return (
    <Layout>
      <Formik
        initialValues={{
          id: nanoid(),
          user: '',
          phone: '',
          email: '',
          details: '',
        }}
        method="POST"
        onSubmit={handleSubmit}
      >
        <Form>
          <InputContainer>
            <label>* Full name:</label>
            <Input id="user" name="user" placeholder="John Rosie" required />
            <label>* E-mail:</label>
            <Input
              id="email"
              name="email"
              placeholder="johnrosie@gmail.com"
              type="email"
              required
            />
            <label>* Phone:</label>
            <Input
              id="phone"
              name="phone"
              placeholder="380961234567"
              required
            />
            <label>Message:</label>
            <Input
              id="details"
              name="details"
              placeholder="Your message"
              type="textarea"
            />
            <ButtonSubmit type="submit">
              <span>Send</span>
              <div className="main-link--btn">
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
              </div>
            </ButtonSubmit>
          </InputContainer>
        </Form>
      </Formik>
      <StyledContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Layout>
  );
};

export default FormSection;
