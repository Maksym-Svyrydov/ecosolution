import styled from 'styled-components';
import { Field } from 'formik';
export const Layout = styled.section`
  padding: 36px 20px;
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
  @media screen and (max-width: 1364px) {
    width: 100%;
  }
`;
export const Input = styled(Field)`
  font-size: 18px;
  color: #283340;
  background: inherit;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #97d28b;
  padding: 6px 10px;
  @media screen and (max-width: 1364px) {
    ${'' /* width: 100%; */}
    font-size: 18px;
    margin: 0px 0px 28px 0px;
  }
  @media screen and (min-width: 1365px) {
    font-size: 18px;
    margin: 0px 0px 12px 0px;
  }

  @media screen and (min-width: 1919px) {
    margin: 0px 0px 20px 0px;
    font-size: 24px;
  }
`;
export const ButtonSubmit = styled.button`
display: flex;
height: 39px;
padding: 4px 4px 4px 16px;
justify-content: center;
align-items: center;
gap: 12px;
color: #173D33;
font-family: Fira Sans;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 18px; /* 112.5% */
letter-spacing: -0.64px;
border-radius: 500px;
border: 1px solid #97D28B;
  cursor: pointer;
  margin: 25px  0px 0px auto;
  transition: 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  &:hover,
  :focus {
    transform: scale(1.05);
    background-color: #283340;
    color: #f5f2f0;
    
  }
    .main-link--btn {
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 100px;
    background-color: #97d28b;
  }
  .main-link--arrow {
    path {
      stroke: #173d33;
    }
  }
  /* @media screen and (max-width: 1364px) {
    width: 140px;
    height: 42px;
    font-size: 14px;
    margin: 25px auto 25px 0px;
  }
  @media screen and (min-width: 1365px) {
    width: 140px;
    height: 32px;
    font-size: 14px;
  }
  @media screen and (min-width: 1919px) {
    width: 212px;
    height: 49px;
    font-size: 18px; */
  }
`;
