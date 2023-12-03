import styled from 'styled-components';
export const Layout = styled.div`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .container {
    max-width: 650px;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .wrapper {
    border-bottom: 1px solid #97d28b;
    border-top: 1px solid #97d28b;
    overflow: hidden;
  }
  .wrapper .question-container {
    width: 100%;
    text-align: left;
    padding: 20px 10px;
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: start;
    font-weight: 500;
    font-size: 20px;
    background: transparent;
    border: none;
    cursor: pointer;
    color: #173d33;
    text-align: justify;
    font-family: Fira Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.72px;
  }
  .question-container.active {
    color: #173d33;
    text-align: justify;
    font-family: Fira Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.72px;
  }
  .wrapper .question-container:hover {
  }
  .icon {
    margin-right: 8px;
  }
  .wrapper .arrow {
    font-size: 2rem;
    transition: 0.5s ease-in-out;
  }
  .arrow.active {
    rotate: 180deg;
    color: #1db954;
  }
  .wrapper .answer-container {
    padding: 0px 12px 0px 33px;
    /* margin-bottom: 16px; */
    transition: height 0.7s ease-in-out;
  }
  .wrapper .answer-content {
    color: #173d33;
    text-align: justify;
    font-family: Fira Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.56px;
  }
`;
