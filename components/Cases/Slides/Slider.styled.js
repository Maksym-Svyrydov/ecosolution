import styled from 'styled-components';
import Slider from 'react-slick';

export const SliderLayout = styled.div`
  .slider-head-section {
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin-bottom: 18px;
    @media screen and (min-width: 1440px) {
      margin-bottom: 100px;
    }
  }
  .counter-active {
    color: #173d33;
    text-align: justify;
    font-family: Fira Sans;
    font-size: 28px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -1.12px;
  }
  .counter-qty {
    color: rgba(23, 61, 51, 0.25);
    font-family: Fira Sans;
    font-size: 28px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -1.12px;
  }
  .button-wrapper {
    display: flex;
    justify-content: space-between;
    gap: 12px;
  }
  .button-slider {
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 50%;
    border: 1px solid #173d33;
    cursor: pointer;
    transition: border 0.25s ease-in;
    path {
      transition: stroke 0.25s ease-in;
      stroke: #173d33;
    }
  }
  .button-slider:hover {
    border: 1px solid #97d28b;
    path {
      stroke: #97d28b;
    }
  }
`;
export const Slide = styled.div`
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0;

  .slide-content {
    display: flex;
    flex-direction: column;
    padding: 36px 12px;
  }
  .slide-content--wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    border-bottom: 1px solid #173d33;
    padding-bottom: 12px;
    margin-bottom: 12px;
    min-height: 66px;
  }
  /* .slide-content--location {
    margin: 0;
    padding: 0;
    color: #173d33;
    text-align: justify;
    font-family: Fira Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.96px;
    margin: 0;
    padding: 0;
  } */
  .slide-content--customer {
    color: #173d33;

    font-family: Fira Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.72px;
    margin: 0px 60px 0px 0px;
    padding: 0px;
  }

  .slide-img {
    flex-shrink: 0;
    width: 100%;
    height: 224px;
    object-fit: cover;
  }

  .slider-btn {
    transition: background-color 0.25s ease;
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 100px;
    background-color: #97d28b;
    border: none;
  }
  .slider-btn--arrow {
    path {
      stroke: #173d33;
      transition: stroke 0.25s ease;
    }
  }
  .slider-btn:hover {
    background-color: #173d33;
  }
  .slider-btn--arrow:hover {
    path {
      stroke: #97d28b;
    }
  }
  .slide-signature {
    display: flex;
    justify-content: space-between;
  }
  .slide-signature--project {
    color: #173d33;
    text-align: justify;
    font-family: Fira Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.48px;
  }
  .slide-signature--date {
    color: #173d33;

    text-align: right;
    font-family: Fira Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.48px;
  }
`;
export const SliderWrapper = styled(Slider)`
  .slick-track {
    @media screen and (min-width: 767px) {
      display: flex;
      gap: 12px;
    }
  }
`;
