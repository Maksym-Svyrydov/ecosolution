import styled from 'styled-components';
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 0px 30px;
    gap: 24px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0px 100px;
  }
  .content-layout {
    @media screen and (min-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    @media screen and (min-width: 1440px) {
      width: 680px;
      justify-content: center;
    }
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
      line-height: 36px; /* 100% */
      width: 347px;
      margin: 0px 0px;
    }
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
    @media screen and (min-width: 768px) {
      margin: auto auto 12px auto;
    }
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
    cursor: pointer;
    transition: background-color 0.25s ease;
    transition: color 0.25s ease;
    transition: fill 0.25s ease;
  }
  .btn:hover {
    background-color: #173d33;
    color: #97d28b;
    circle {
      fill: #97d28b;
    }
  }
`;
