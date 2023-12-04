import Image from 'next/image';

import { Layout, Img } from './Values.styled.styled';

import img from '../../img/content/wind-turbine-clean-energy.png';
import circle from '../../img/icons/maximize-circle.svg';
import global from '../../img/icons/global-edit.svg';
import cpu from '../../img/icons/cpu-charge.svg';
import ranking from '../../img/icons/ranking.svg';
import { useMediaQuery } from '@mui/material';

const ValuesSection = () => {
  const mobile = useMediaQuery('(max-width:480px)');

  return (
    <Layout>
      {!mobile && (
        <Img src={img} alt="Turbine" placeholder="blur" loading="lazy" />
      )}
      <div className="title-wrapper">
        <h2 className="title">Main values of our company</h2>
        <p className="text">
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world&#39;s energy needs.
        </p>
      </div>
      <ul className="list">
        <li className="item">
          <div className="item-title--block">
            <Image src={circle} alt="circle icon" width={16} height={16} />
            <span className="item-title">Openness</span>
          </div>

          <span className="item-text">
            to the world, people, new ideas and projects
          </span>
        </li>
        <li className="item">
          <div className="item-title--block">
            <Image src={global} alt="circle icon" width={16} height={16} />
            <span className="item-title">Responsibility</span>
          </div>

          <span className="item-text">
            we are aware that the results of our work have an impact on our
            lives and the lives of future generations
          </span>
        </li>
        <li className="item">
          <div className="item-title--block">
            <Image src={cpu} alt="circle icon" width={16} height={16} />
            <span className="item-title">Innovation</span>
          </div>

          <span className="item-text">
            we use the latest technology to implement non-standard solutions
          </span>
        </li>
        <li className="item">
          <div className="item-title--block">
            <Image src={ranking} alt="circle icon" width={16} height={16} />
            <span className="item-title">Quality</span>
          </div>

          <span className="item-text">
            we do not strive to be the first among others, but we want to be the
            best in our business
          </span>
        </li>
      </ul>
    </Layout>
  );
};
export default ValuesSection;
