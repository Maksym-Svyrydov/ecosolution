import { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { Link } from 'react-scroll';

import { Container, Logo, NavWrapp, NavBtn, IconMenu } from './Header.styled';
import logoImg from '../../img/Logo.svg';
import icon from '../../img/icons/menu.svg';

import { NavMenu } from './NavMenu/NavMenu';

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const tablet = useMediaQuery('(min-width:768px)');
  const toggleNav = () => {
    if (!setShowNav) {
      setShowNav(true);
    }
    setShowNav(false);
  };

  return (
    <>
      <Container id="Header">
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
        {tablet && (
          <Link
            href="#"
            rel="preload"
            className="btn"
            to="Contacts"
            spy={true}
            smooth={true}
            duration={500}
          >
            <span>Get in touch</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
            >
              <circle cx="7" cy="7.5" r="7" fill="none" />
            </svg>
          </Link>
        )}
      </Container>
      {showNav && <NavMenu navClose={toggleNav} />}
    </>
  );
};
export default Header;
