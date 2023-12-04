import styled from 'styled-components';
import Image from 'next/image';

export const Layout = styled.footer`
  padding: 24px 20px;
  .logo-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
  }
  .main-link--btn {
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 100px;
    background-color: #97d28b;
    width: 32px;
    height: 32px;
    border-radius: 50%;

    svg {
      width: 24px;
      height: 24px;
      transform: rotate(270deg);
    }
  }
  a {
    text-decoration: none;
    color: #173d33;
    font-family: Fira Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.64px;
    width: 100%;
  }
  ul {
    list-style: none;
    padding: 0;
    gap: 12px;
    align-items: center;
    justify-content: center;
  }
  li {
    display: flex;
  }
  p {
    margin: 0;
    padding: 0;
  }
  .list-social {
    display: flex;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 24px;
  }
  .main-link--arrow {
    path {
      stroke: #173d33;
    }
  }
  .list-contacts {
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    align-items: center;
  }
  .list-contacts--item {
  }
`;

export const Logo = styled(Image)`
  margin-right: 12px;
`;