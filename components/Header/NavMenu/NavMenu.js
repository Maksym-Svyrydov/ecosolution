import { useEffect } from 'react';
import {
  Backdrop,
  Container,
  CloseSection,
  BtnWrapp,
  BtnClose,
  IconClose,
  NavList,
  NavItem,
  Arrow,
  IconWrapp,
  SocialLink,
  IconSocial,
} from './NavMenu.styled';

export const NavMenu = ({ navClose }) => {
  useEffect(() => {
    const closeEsc = (e) => {
      if (e.code === 'Escape') {
        return navClose();
      }
    };
    window.addEventListener('keydown', closeEsc);
    return () => {
      window.removeEventListener('keydown', closeEsc);
    };
  }, [navClose]);
  return (
    <Backdrop
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          navClose();
        }
      }}
    >
      <Container>
        <CloseSection>
          <BtnWrapp
            onClick={() => {
              navClose();
            }}
          >
            <BtnClose>
              <IconClose
                width="20"
                alt="icon"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="iconamoon:close-light">
                  <path
                    id="Vector"
                    d="M5.8335 5.83331L14.1668 14.1666M5.8335 14.1666L14.1668 5.83331"
                    stroke="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </IconClose>
              close
            </BtnClose>
          </BtnWrapp>
        </CloseSection>
        <NavList>
          <NavItem
            className="active"
            href="#"
            to="Main"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => {
              navClose();
            }}
          >
            Main <Arrow>&#8599;</Arrow>
          </NavItem>
          <NavItem
            to="About"
            href="#"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => {
              navClose();
            }}
          >
            About <Arrow>&#8599;</Arrow>
          </NavItem>
          <NavItem
            to="Cases"
            href="#"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => {
              navClose();
            }}
          >
            Cases <Arrow>&#8599;</Arrow>
          </NavItem>
          <NavItem
            to="FAQ"
            href="#"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => {
              navClose();
            }}
          >
            FAQ <Arrow>&#8599;</Arrow>
          </NavItem>
          <NavItem
            to="Contacts"
            href="#"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => {
              navClose();
            }}
          >
            Contact Us<Arrow>&#8599;</Arrow>
          </NavItem>
        </NavList>
        <IconWrapp>
          <SocialLink>
            <IconSocial
              version="1.1"
              alt="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <title>facebook</title>
              <path d="M18.667 12.4v3.867h3.467c0.267 0 0.4 0.267 0.4 0.533l-0.533 2.533c0 0.133-0.267 0.267-0.4 0.267h-2.933v9.733h-4v-9.6h-2.267c-0.267 0-0.4-0.133-0.4-0.4v-2.533c0-0.267 0.133-0.4 0.4-0.4h2.267v-4.4c0-2.267 1.733-4 4-4h3.6c0.267 0 0.4 0.133 0.4 0.4v3.2c0 0.267-0.133 0.4-0.4 0.4h-3.2c-0.267 0-0.4 0.133-0.4 0.4z"></path>
              <path
                className="line"
                fill="none"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeMiterlimit="4"
                strokeWidth="2"
                stroke="#000"
                d="M20 29.333h-8c-6.667 0-9.333-2.667-9.333-9.333v-8c0-6.667 2.667-9.333 9.333-9.333h8c6.667 0 9.333 2.667 9.333 9.333v8c0 6.667-2.667 9.333-9.333 9.333z"
              ></path>
            </IconSocial>
          </SocialLink>
          <SocialLink href="#">
            <IconSocial
              alt="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <title>instagram</title>
              <path
                className="line"
                fill="none"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeMiterlimit="4"
                strokeWidth="2"
                stroke="#000"
                d="M12 29.333h8c6.667 0 9.333-2.667 9.333-9.333v-8c0-6.667-2.667-9.333-9.333-9.333h-8c-6.667 0-9.333 2.667-9.333 9.333v8c0 6.667 2.667 9.333 9.333 9.333z"
              ></path>
              <path
                className="line"
                fill="none"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeMiterlimit="4"
                strokeWidth="2"
                stroke="#000"
                d="M16 20.667c2.577 0 4.667-2.089 4.667-4.667s-2.089-4.667-4.667-4.667c-2.577 0-4.667 2.089-4.667 4.667s2.089 4.667 4.667 4.667z"
              ></path>
              <path
                className="line"
                fill="none"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeMiterlimit="4"
                strokeWidth="2.6667"
                stroke="#000"
                d="M23.515 9.333h0.015"
              ></path>
            </IconSocial>
          </SocialLink>
        </IconWrapp>
      </Container>
    </Backdrop>
  );
};
