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
  padding: 36px 20px;
  height: 112px;
  width: 100%;
  outline: 1px solid tomato;
`;
export const LogoWrapp = styled.div``;
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
`;
export const NavBtn = styled.button`
  display: inline-flex;
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
