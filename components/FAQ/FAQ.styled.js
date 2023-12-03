import styled from 'styled-components';
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  .title {
    color: #173d33;
    font-family: Oswald;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 100% */
    text-transform: uppercase;
  }
  .text {
    color: #173d33;
    text-align: justify;
    font-family: Fira Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.72px;
    margin: 16px auto;
  }
  .btn {
    display: inline-flex;
    padding: 10px 16px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    border-radius: 500px;
    background-color: #97d28b;
    width: 130px;
    height: 39px;
    margin: 0px auto 0px auto;
  }
`;
