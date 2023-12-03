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
  .title {
    font-size: 28px;
    line-height: 28px; /* 100% */
    text-transform: uppercase;
    padding: 0px 40px 0px 0px;
    margin-bottom: 24px;
  }
  .text {
    text-align: justify;
    font-family: Fira Sans;
    font-size: 16px;
    line-height: normal;
    letter-spacing: -0.64px;
    margin: 0px 0px 24px 0px;
  }
  .list {
    display: grid;
    list-style: none;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    align-items: center;
    justify-items: baseline;

    padding: 0;
    font-weight: 400;
    width: 100%;
    margin-bottom: 36px;
  }
  .item {
    background-color: #eaedf1;
    max-width: 148px;
    height: 197px;
    padding: 0px 8px 0px 8px;
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
