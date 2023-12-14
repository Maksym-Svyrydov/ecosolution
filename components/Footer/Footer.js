import { useMediaQuery } from '@mui/material';
import { Link } from 'react-scroll';

import { Layout, Logo } from './Footer.styled';
import logoImg from '../../img/Logo.svg';

const Footer = () => {
  const tablet = useMediaQuery('(min-width:768px)');
  return (
    <Layout>
      {!tablet && (
        <>
          <div className="logo-wrapper">
            <Logo
              src={logoImg}
              alt="Logo"
              width={259}
              height={40}
              priority={true}
            />
            <div className="main-link--btn">
              <svg
                className="main-link--arrow"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.62012 4.45312L13.6668 8.49979L9.62012 12.5465"
                  stroke="none"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.3335 8.5H13.5535"
                  stroke="none"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <ul className="list-social">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14 9.3V12.2H16.6C16.8 12.2 16.9 12.4 16.9 12.6L16.5 14.5C16.5 14.6 16.3 14.7 16.2 14.7H14V22H11V14.8H9.3C9.1 14.8 9 14.7 9 14.5V12.6C9 12.4 9.1 12.3 9.3 12.3H11V9C11 7.3 12.3 6 14 6H16.7C16.9 6 17 6.1 17 6.3V8.7C17 8.9 16.9 9 16.7 9H14.3C14.1 9 14 9.1 14 9.3Z"
                    fill="#173D33"
                  />
                  <path
                    d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z"
                    stroke="#173D33"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                    stroke="#173D33"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
                    stroke="#173D33"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.6361 7H17.6477"
                    stroke="#173D33"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
          </ul>
          <ul className="list-contacts">
            <li className="list-contacts--item">
              <a
                href="https://maps.app.goo.gl/vF8FnnvTM5bg6UWr8"
                target="_blank"
                rel="noopener noreferrer"
              >
                79005, Ukraine, Lviv str. Shota Rustaveli, 7
              </a>
            </li>
            <li className="list-contacts--item">
              <a href="mailto:office@ecosolution.com">office@ecosolution.com</a>
            </li>
            <li className="list-contacts--item">
              <p>ecosolution &#169; 2023</p>
            </li>
          </ul>
        </>
      )}
      {tablet && (
        <>
          <ul className="list-desktop">
            <li className="item-desktop--img">
              <Logo
                src={logoImg}
                alt="Logo"
                width={259}
                height={40}
                priority={true}
              />
            </li>
            <li className="list-contacts--item">
              <a
                href="https://maps.app.goo.gl/vF8FnnvTM5bg6UWr8"
                target="_blank"
                rel="noopener noreferrer"
              >
                79005, Ukraine, Lviv str. Shota Rustaveli, 7
              </a>
            </li>
          </ul>
          <ul className="list-desktop">
            <li className="item-desktop--img">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14 9.3V12.2H16.6C16.8 12.2 16.9 12.4 16.9 12.6L16.5 14.5C16.5 14.6 16.3 14.7 16.2 14.7H14V22H11V14.8H9.3C9.1 14.8 9 14.7 9 14.5V12.6C9 12.4 9.1 12.3 9.3 12.3H11V9C11 7.3 12.3 6 14 6H16.7C16.9 6 17 6.1 17 6.3V8.7C17 8.9 16.9 9 16.7 9H14.3C14.1 9 14 9.1 14 9.3Z"
                    fill="#173D33"
                  />
                  <path
                    d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z"
                    stroke="#173D33"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                    stroke="#173D33"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
                    stroke="#173D33"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.6361 7H17.6477"
                    stroke="#173D33"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li className="list-contacts--item">
              <a href="mailto:office@ecosolution.com">office@ecosolution.com</a>
            </li>
          </ul>
          <ul className="list-desktop">
            <li className="item-desktop--img">
              <Link
                className="main-link--btn"
                to="Main"
                spy={true}
                smooth={true}
                duration={500}
              >
                <svg
                  className="main-link--arrow"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.62012 4.45312L13.6668 8.49979L9.62012 12.5465"
                    stroke="none"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.3335 8.5H13.5535"
                    stroke="none"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </li>
            <li className="list-contacts--item">
              <p>ecosolution &#169; 2023</p>
            </li>
          </ul>
        </>
      )}
    </Layout>
  );
};
export default Footer;
