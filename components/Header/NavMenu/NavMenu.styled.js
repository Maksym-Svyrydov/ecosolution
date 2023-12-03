import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  box-sizing: border-box;
  top: 0;
  left: 0;
  z-index: 5;
  backdrop-filter: blur(2px);
  width: 100%;
  height: 100%;
`;
export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  top: 55px;
  right: 30px;
  position: fixed;
  flex-direction: column;
  color: #fff;
  font-family: Fira Sans;
  padding: 28px 19px;
  margin: auto auto;
  width: 320px;
  height: 701px;
  border-radius: 25px;
  background: rgba(23, 61, 51, 0.75);
  backdrop-filter: blur(12.5px);
`;
export const CloseSection = styled.div`
  border-bottom: 1px solid #fff;
  margin-bottom: 24px;
  padding: 8px 0px;
`;
export const BtnWrapp = styled.div`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.8px;
  width: 80px;
`;
export const BtnClose = styled.div`
  display: flex;
  align-items: center;
  transition: color 0.25s ease-in;
  cursor: pointer;
  &:hover {
    color: #97d28b;
  }
`;
export const IconClose = styled.svg`
  fill: #fff;
  width: 32px;
  transition: stroke 0.25s ease-in;
  height: 32px;
  transition: stroke 0.25s ease-in;
  & g path {
    transition: stroke 0.25s ease-in;
    stroke: #fff;
  }

  ${BtnClose}:hover & {
    stroke: #97d28b;
    fill: #97d28b;
    & g path {
      transition: stroke 0.25s ease-in;
      stroke: #97d28b;
    }
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0;
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.25);
  font-family: Fira Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.96px;
  transition: color 0.25s ease-in;
  cursor: pointer;

  &.active {
    color: #fff;
  }
  &:hover {
    color: #97d28b;
  }
`;
export const Arrow = styled.span`
  font-size: 16px;
  margin-left: 4px;
`;

export const IconWrapp = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-top: auto;
`;
export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;
export const IconSocial = styled.svg`
  transition: fill 0.25s ease-in;
  transition: stroke 0.25s ease-in;
  stroke: #fff;
  fill: #fff;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  .line {
    stroke: #fff;
  }
  ${SocialLink}:hover & {
    stroke: #97d28b;
    fill: #97d28b;
    .line {
      stroke: #97d28b;
    }
  }
`;
