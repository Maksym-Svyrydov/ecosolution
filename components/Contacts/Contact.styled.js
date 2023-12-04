import styled from 'styled-components';
export const Section = styled.section`
  padding: 0px 20px;
  a {
    text-decoration: none;
    color: #173d33;
    text-align: justify;
    font-family: Fira Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.8px;
  }
  p {
    color: #173d33;
    text-align: justify;
    font-family: Fira Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.64px;
    margin: 0px 0px 8px 0px;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0px 0px 24px 0px;
  }
  li {
    display: flex;
    align-items: center;
  }
  svg {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
  .title-contacts {
    color: #173d33;
    font-family: Oswald;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 100% */
    text-transform: uppercase;
    margin-bottom: 24px;
  }
  .list-social {
    display: flex;
  }
`;
