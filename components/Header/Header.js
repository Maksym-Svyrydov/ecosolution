import { Container, Logo, NavWrapp, NavBtn, IconMenu } from './Header.styled';
import logoImg from '../../img/Logo.svg';
import { NavMenu } from './NavMenu/NavMenu';
import { useState } from 'react';
import icon from '../../img/icons/menu.svg';

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    if (!setShowNav) {
      setShowNav(true);
    }
    setShowNav(false);
  };

  return (
    <>
      <Container>
        <Logo
          src={logoImg}
          alt="Logo"
          width={269}
          height={46}
          priority={true}
        />
        <NavWrapp>
          {!showNav && (
            <NavBtn
              onClick={() => {
                setShowNav(true);
              }}
            >
              <IconMenu src={icon} alt="icon" />
            </NavBtn>
          )}
        </NavWrapp>
      </Container>
      {showNav && <NavMenu navClose={toggleNav} />}
    </>
  );
};
export default Header;
