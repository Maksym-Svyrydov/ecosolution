import styled from 'styled-components';

export const Layout = styled.section`
  display: flex;
  flex-direction: column;

  padding: 0px 20px;
  margin-bottom: 36px;
  .title {
    color: #173d33;
    text-align: center;
    font-family: Oswald;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 100% */
    text-transform: uppercase;
    margin: 0;
    @media screen and (min-width: 768px) {
      width: 368px;
      margin: 100px auto 0px auto;
    }
  }
  .line {
    width: 1px;
    height: 48px;
    flex-shrink: 0;
    background-color: #97d28b;
    margin: 24px auto;
  }
  .wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .counter {
    display: inline-flex;
    color: #97d28b;
    text-align: center;
    font-family: Oswald;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px; /* 100% */
    text-transform: uppercase;
    margin-right: 8px;
  }
  .txt {
    display: inline-flex;
    color: #173d33;
    text-align: center;
    font-family: Oswald;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 100% */
    padding: 0;
  }
`;
