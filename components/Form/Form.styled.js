import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
export const Layout = styled.div`
  display: flex;
  padding: 36px 20px;
  background-color: #eaedf1;
  @media screen and (min-width: 768px) {
    border-bottom: none;
    margin-bottom: 100px;
    padding: 0;
    width: 342px;
    @media screen and (min-width: 1440px) {
      width: 596px;
      margin-bottom: 120px;
    }
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #eaedf1;
  width: 100%;
  @media screen and (min-width: 768px) {
    gap: 0;
    padding: 36px 24px;
    border-bottom: none;
  }
  @media screen and (min-width: 1440px) {
  }

  .input {
    font-size: 18px;
    color: #283340;
    background-color: inherit;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #97d28b;
    padding: 6px 10px;
    &:writing-mode {
      background-color: inherit;
    }
    @media screen and (min-width: 768px) {
    }
  }
  .input label {
    margin-bottom: 8px;
    color: #173d33;
    text-align: justify;
    font-family: Fira Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.64px;
    background-color: inherit;
  }

  .error-wrapper {
    margin-top: 4px;
    height: 18px;
  }
  .error {
    color: #d28b8b;
    text-align: right;
    font-family: Fira Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.48px;
    margin: 0;
    padding: 0;
    height: 18px;
  }
  input.input-error {
    height: 16px;
    border-color: #fc8181;
    background-color: inherit;
  }
`;
export const ButtonSubmit = styled.button`
  display: flex;
  height: 39px;
  width: 99px;
  padding: 4px 4px 4px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  color: #173d33;
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 112.5% */
  letter-spacing: -0.64px;
  border-radius: 500px;
  border: 1px solid #97d28b;
  cursor: pointer;
  margin: 25px 0px 0px auto;
  transition: 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  &:hover,
  :focus {
    background-color: #283340;
    color: #97d28b;
  }
  .main-link--btn {
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 100px;
    background-color: #97d28b;
    width: 32px;
  }
  .main-link--arrow {
    path {
      stroke: #173d33;
    }
  }
`;
