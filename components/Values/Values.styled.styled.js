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
  @media screen and (min-width: 1440px) {
    padding-left: 100px;
    padding-right: 100px;
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
    @media screen and (min-width: 1440px) {
      font-size: 48px;
      line-height: 48px;
      width: 365px;
      padding: 0px 60px 0px 0px;
      margin-right: 254px;
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
      width: 355px;
    }
    @media screen and (min-width: 1440px) {
      width: 620px;
      padding-left: 161px;
    }
  }
  .grid-wrapper {
    @media screen and (min-width: 1440px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 2fr 1fr;
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
      grid-template-columns: repeat(4, [col] 177px);
      grid-template-rows: repeat(2, [row] 221px);
      width: 768px;
      margin: 0 auto;
      gap: 18px;
    }
    @media screen and (min-width: 1440px) {
      display: grid;
      grid-gap: 10px;
      grid-template-columns: repeat(4, [col] 310px);
      grid-template-rows: repeat(2, [row] 364px);
      grid-gap: 24px;
      margin: 0 auto;
      width: 1240px;
    }
  }
  .box-1 {
    grid-column: 1;
    grid-row: 1;
    @media screen and (min-width: 768px) {
      grid-column: col / span 1;
      grid-row: row;
    }
    @media screen and (min-width: 1440px) {
      grid-column: col / span 1;
      grid-row: row;
    }
  }
  .box-2 {
    grid-column: 2;
    grid-row: 1;
    @media screen and (min-width: 768px) {
      grid-column: col 2 / span 1;
      grid-row: row;
    }
    @media screen and (min-width: 1440px) {
      grid-column: col 2 / span 1;
      grid-row: row;
    }
  }
  .box-3 {
    @media screen and (min-width: 768px) {
      grid-column: col 3 / span 2;
      grid-row: row;
    }
  }
  .box-4 {
    @media screen and (min-width: 768px) {
      grid-column: col 1 / span 2;
      grid-row: row 2;
    }
  }
  .box-5 {
    grid-column: 1;
    grid-row: 2;

    @media screen and (min-width: 768px) {
      grid-column: col 3 / span 1;
      grid-row: row 2;
    }
  }
  .box-6 {
    grid-column: 2;
    grid-row: 2;

    @media screen and (min-width: 768px) {
      grid-column: col 4 / span 1;
      grid-row: row 2;
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
    @media screen and (min-width: 1440px) {
      width: 274px;
      height: 339px;
    }
  }

  .item-title--block {
    padding-top: 13px;
    padding-bottom: 33px;
    border-bottom: 1px solid #173d33;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 1440px) {
      padding: 48px 0px 94px 24px;
    }
  }
  .item-title {
    font-family: Oswald;
    font-size: 16px;
    line-height: 24px;
    text-transform: uppercase;
    margin: 0px 0px 0px 8px;
    @media screen and (min-width: 1440px) {
      font-size: 32px;
      font-style: normal;
      font-weight: 400;
      line-height: 48px; /* 150% */
      text-transform: uppercase;
    }
  }
  .item-text {
    text-align: justify;
    font-family: Fira Sans;
    font-size: 14px;
    line-height: normal;
    letter-spacing: -0.56px;
    margin: 0;
    @media screen and (min-width: 1440px) {
      display: block;
      font-size: 16px;
      margin: 24px 24px 0px 24px;
    }
  }
  .item-img {
    overflow: hidden;
    width: 700px;
    height: 339px;
    position: relative;
    @media screen and (min-width: 768px) {
      width: 410px;
      height: 195px;
    }
    @media screen and (min-width: 1440px) {
      width: 604px;
      height: 405px;
    }
  }
`;

export const Img = styled(Image)`
  flex-shrink: 0;
  width: 100%;
  height: 316.031px;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const ImgGrid = styled(Image)`
  @media screen and (min-width: 768px) {
    width: 368px;
    height: 197px;
  }
  @media screen and (min-width: 1440px) {
    width: 625px;
    height: 339px;
  }
`;
