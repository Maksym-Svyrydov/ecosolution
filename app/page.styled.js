import styled from 'styled-components';
export const DesktopLayout = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 30px 0px 30px;
  gap: 122px;
  border-bottom: 1px solid #97d28b;
  @media screen and (min-width: 1440px) {
    padding: 0px 100px;
    gap: 187px;
  }
`;
export const TitileContacts = styled.h2`
  color: #173d33;
  font-family: Oswald;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px; /* 100% */
  text-transform: uppercase;
  padding: 0 30px;
  margin: 100px auto 36px auto;
  width: 170px;
  @media screen and (min-width: 1440px) {
    font-size: 48px;
    line-height: 48px;
    width: 230px;
    margin: 120px auto;
  }
`;
