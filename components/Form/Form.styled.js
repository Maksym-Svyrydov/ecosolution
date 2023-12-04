import styled from 'styled-components';
import { Field } from 'formik';
export const Layout = styled.section`
  padding: 36px 20px;
  @media screen and (min-width: 768px) {
    background-color: #eaedf1;
    padding: 36px 24px;
    border-bottom: none;
  }
  label {
    margin-bottom: 8px;
    color: #173d33;
    text-align: justify;
    font-family: Fira Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.64px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eaedf1;
`;
export const Input = styled(Field)`
  font-size: 18px;
  color: #283340;
  background-color: inherit;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #97d28b;
  padding: 6px 10px;
`;
export const InputMessage = styled.textarea`
  font-size: 18px;
  color: #283340;
  background: inherit;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #97d28b;
  padding: 6px 10px;
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
