import styled from 'styled-components';

export const Layout = styled.section`
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
    @media screen and (min-width: 768px) {
      font-size: 36px;
      width: 264px;
      height: 72px;
      margin: 0;
      line-height: 36px;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;
