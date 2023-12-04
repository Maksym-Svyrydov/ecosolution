import Image from 'next/image';
import styled from 'styled-components';

export const Layout = styled.section`
  padding-left: 20px;
  padding-right: 20px;
  color: #173d33;
  font-family: Oswald;
  font-style: normal;
  font-weight: 400;
  box-sizing: border-box;
  @media screen and (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
  .title-wrapper {
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 768px) {
      flex-direction: row;
      margin-bottom: 100px;
      justify-content: space-between;
    }
  }
  .title {
    font-size: 28px;
    line-height: 28px; /* 100% */
    text-transform: uppercase;
    padding: 0px 40px 0px 0px;
    margin-bottom: 24px;
    @media screen and (min-width: 768px) {
      font-size: 36px;
      font-style: normal;
      font-weight: 400;
      line-height: 36px; /* 100% */
      width: 272px;
      margin: 88px 0px 24px 0px;
    }
  }
  .text {
    text-align: justify;
    font-family: Fira Sans;
    font-size: 16px;
    line-height: normal;
    letter-spacing: -0.64px;
    margin: 0px 0px 24px 0px;
    @media screen and (min-width: 768px) {
      margin: 88px 0px 0px 0px;
      border-left: 1px solid #97d28b;
      padding-left: 11px;
      max-width: 355px;
    }
  }
  .list {
    display: grid;
    list-style: none;
    grid-template-columns: 2fr 2fr;
    grid-template-rows: 2fr 2fr;
    gap: 24px;
    align-items: center;
    justify-items: baseline;
    padding: 0;
    font-weight: 400;
    margin-bottom: 36px;

    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(3, 3fr);
      grid-template-rows: repeat(1, 3fr);
      gap: 18px;
    }
  }

  .box-1 {
    grid-column: 1;
    grid-row: 1;
    @media screen and (min-width: 768px) {
      grid-column: 1;
      grid-row: 1;
    }
  }
  .box-2 {
    grid-column: 2;
    grid-row: 1;
    @media screen and (min-width: 768px) {
      grid-column: 2;
      grid-row: 1;
    }
  }
  .box-3 {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row: 1;
  }
  .box-4 {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 2;
    grid-row-end: 2;
  }
  .box-5 {
    grid-column: 1;
    grid-row: 2;
    @media screen and (min-width: 768px) {
      grid-column-start: 2;
      grid-column-end: 2;
      grid-row-start: 2;
      grid-row-end: 2;
    }
  }
  .box-6 {
    grid-column: 2;
    grid-row: 2;
    @media screen and (min-width: 768px) {
      grid-column-start: 3;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 2;
    }
  }

  .item {
    background-color: #eaedf1;
    width: 148px;
    height: 197px;
    padding: 0px 8px 0px 8px;
    @media screen and (min-width: 768px) {
      width: 159px;
    }
  }
  .item-img {
    @media screen and (min-width: 768px) {
      max-width: 345px;
    }
  }
  .item-title--block {
    padding-top: 13px;
    padding-bottom: 33px;
    border-bottom: 1px solid #173d33;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
  }
  .item-title {
    font-family: Oswald;
    font-size: 16px;
    line-height: 24px;
    text-transform: uppercase;
    margin: 0px 0px 0px 8px;
  }
  .item-text {
    text-align: justify;
    font-family: Fira Sans;
    font-size: 14px;
    line-height: normal;
    letter-spacing: -0.56px;
    margin: 0;
  }
`;

export const Img = styled(Image)`
  flex-shrink: 0;
  width: 100%;
  height: 316.031px;
  object-fit: cover;
`;
