import styled from 'styled-components';

export const Layout = styled.section`
  margin: 222px auto 48px auto;
  display: flex;
  flex-direction: column;
  color: #173d33;
  padding: 0px 20px;
  .main-title {
    color: #173d33;
    font-family: Oswald;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px; /* 100% */
    text-transform: uppercase;
    margin-bottom: 24px;
  }
  .main-text {
    color: #173d33;
    text-align: justify;
    font-family: Fira Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.64px;
    margin-bottom: 24px;
  }
  .main-wrapper {
    border-bottom: 1px solid #97d28b;
    padding-bottom: 24px;
    margin-bottom: 24px;
  }
  .main-link {
    display: flex;
    height: 39px;
    width: 141px;
    padding: 4px 4px 4px 16px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
    border-radius: 500px;
    border: 1px solid #97d28b;
    text-decoration: none;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    transition: background-color 0.25s ease-in;
  }
  .main-link:hover {
    border: 1px solid #173d33;
    background-color: #173d33;
    span {
      color: #97d28b;
    }
  }
  .main-link--text {
    color: #173d33;
    transition: color 0.25s ease-in;
    font-family: Fira Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 112.5% */
    letter-spacing: -0.64px;
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
  .main-address {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.64px;
    margin-bottom: 8px;
  }
  .main-email {
    display: inline-block;
    margin: 0px auto;
    color: #173d33;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.64px;
    text-decoration: none;
    margin-bottom: 36px;
    cursor: pointer;
  }
`;