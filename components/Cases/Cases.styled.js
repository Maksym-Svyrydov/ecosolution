import styled from 'styled-components';

export const Layout = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  @media screen and (min-width: 768px) {
    padding: 0px 30px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0px 100px;
  }
  .title {
    color: #173d33;
    font-family: Oswald;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 100% */
    text-transform: uppercase;
    @media screen and (min-width: 768px) {
      font-size: 36px;
      width: 264px;
      height: 72px;
      margin: 0;
      line-height: 36px;
    }
    @media screen and (min-width: 1440px) {
      box-sizing: border-box;
      display: block;
      font-size: 48px;
      width: 691px;
      height: 96px;
      margin: 0;
      line-height: 48px;
      padding-right: 300px;
      padding-left: 8px;
      border-right: 1px solid #97d28b;
    }
  }
`;
