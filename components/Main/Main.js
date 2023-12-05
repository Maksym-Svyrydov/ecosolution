import { Link } from 'react-scroll';
import { Layout } from './Main.styled';
import { useMediaQuery } from '@mui/material';

const MainSection = () => {
  const tablet = useMediaQuery('(min-width:768px)');
  return (
    <Layout id="Main">
      <div className="main-title--wrapper">
        <h1 className="main-title">RENEWABLE ENERGY For any task</h1>
        <div className="text-wrapper">
          <p className="main-text">
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </p>
          <Link
            className="main-link"
            to="Cases"
            spy={true}
            smooth={true}
            duration={500}
          >
            <span className="main-link--text">Learn more</span>
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
          </Link>
        </div>
      </div>
      <div className="main-wrapper">
        <address className="main-address">
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </address>
        <a className="main-email" type="email" href="office@ecosolution.com">
          office@ecosolution.com
        </a>
        {tablet && <span>ecosolution &#169; 2023</span>}
      </div>
    </Layout>
  );
};
export default MainSection;
