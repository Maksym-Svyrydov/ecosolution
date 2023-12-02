import Link from 'next/link';
import { Layout } from './Main.styled';

const MainSection = () => {
  return (
    <Layout>
      <h1 className="main-title">RENEWABLE ENERGY For any task</h1>
      <p className="main-text">
        Development and implementation of renewable non-polluting energy
        sources, generating power generation using energy wind, sun, water,
        biomass
      </p>
      <div className="main-wrapper">
        <Link className="main-link" href="#">
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
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.3335 8.5H13.5535"
                stroke="none"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </Link>
      </div>
      <address className="main-address">
        79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
      </address>
      <a className="main-email" type="email" href="office@ecosolution.com">
        office@ecosolution.com
      </a>
    </Layout>
  );
};
export default MainSection;
