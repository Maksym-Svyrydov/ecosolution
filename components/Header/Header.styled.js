import styled from 'styled-components';
import Image from 'next/image';
export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  padding: 36px 20px;
  height: 112px;
  width: 100%;
  margin: auto;
  background-color: #f3f5fa;
  @media screen and (min-width: 767px) {
    padding: 36px 30px;
  }
  .btn {
    display: inline-flex;
    padding: 10px 16px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    border-radius: 500px;
    background-color: #97d28b;
    width: 108px;
    height: 16px;
    margin: 0px auto 0px auto;
    color: #173d33;
    font-family: Fira Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.64px;
    transition: background-color 0.25s ease;
    transition: color 0.25s ease;
    transition: fill 0.25s ease;
    @media screen and (min-width: 767px) {
      margin: 0px 0px 0px 12px;
    }
    circle {
      fill: #173d33;
    }
  }
  .btn:hover {
    background-color: #173d33;
    color: #97d28b;
    circle {
      fill: #97d28b;
    }
  }
`;
export const Logo = styled(Image)``;
export const NavWrapp = styled.div`
  color: #173d33;
  text-align: justify;
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  @media screen and (min-width: 767px) {
    margin-left: auto;
  }
`;
export const NavBtn = styled.button`
  display: inline-flex;
  position: relative;
  height: 39px;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  background-color: #dcefd8;
  border: none;
  border-radius: 500px;
  transition: background-color 0.25s ease-in;
  cursor: pointer;
  &:hover {
    background-color: #97d28b;
  }
`;
export const IconMenu = styled(Image)`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`;
