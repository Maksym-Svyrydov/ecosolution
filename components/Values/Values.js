import Image from 'next/image';
import { useMediaQuery } from '@mui/material';
import { Layout, Img, ImgGrid } from './Values.styled.styled';
import wind from '../../img/content/values/wind.png';
import solar from '../../img/content/values/solar.png';
import img from '../../img/content/wind-turbine-clean-energy.png';
import circle from '../../img/icons/maximize-circle.svg';
import global from '../../img/icons/global-edit.svg';
import cpu from '../../img/icons/cpu-charge.svg';
import ranking from '../../img/icons/ranking.svg';

const ValuesSection = () => {
  const mobile = useMediaQuery('(max-width:480px)');
  const tablet = useMediaQuery('(min-width:768px)');
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
      <>
        {!tablet && (
          <div className="list">
            <div className="item box-1">
              <div className="item-title--block">
                <Image src={circle} alt="circle icon" width={16} height={16} />
                <span className="item-title">Openness</span>
              </div>
              <span className="item-text">
                to the world, people, new ideas and projects
              </span>
            </div>
            <div className="item box-2">
              <div className="item-title--block">
                <Image src={global} alt="circle icon" width={16} height={16} />
                <span className="item-title">Responsibility</span>
              </div>

              <span className="item-text">
                we are aware that the results of our work have an impact on our
                lives and the lives of future generations
              </span>
            </div>
            <div className="item box-5">
              <div className="item-title--block">
                <Image src={cpu} alt="circle icon" width={16} height={16} />
                <span className="item-title">Innovation</span>
              </div>
              <span className="item-text">
                we use the latest technology to implement non-standard solutions
              </span>
            </div>
            <div className="item box-6">
              <div className="item-title--block">
                <Image src={ranking} alt="circle icon" width={16} height={16} />
                <span className="item-title">Quality</span>
              </div>

              <span className="item-text">
                we do not strive to be the first among others, but we want to be
                the best in our business
              </span>
            </div>
          </div>
        )}
        {tablet && (
          <>
            <ul className="list">
              <li className="item box-1">
                <div className="item-title--block">
                  <Image
                    src={circle}
                    alt="circle icon"
                    width={16}
                    height={16}
                  />
                  <span className="item-title">Openness</span>
                </div>
                <span className="item-text">
                  to the world, people, new ideas and projects
                </span>
              </li>
              <li className="item box-2">
                <div className="item-title--block">
                  <Image
                    src={global}
                    alt="circle icon"
                    width={16}
                    height={16}
                  />
                  <span className="item-title">Responsibility</span>
                </div>

                <span className="item-text">
                  we are aware that the results of our work have an impact on
                  our lives and the lives of future generations
                </span>
              </li>
              <li className="item-img box-3">
                <ImgGrid
                  // width={234}
                  src={wind}
                  alt="turbines"
                  placeholder="blur"
                  priority={true}
                  fill={false}
                  style={{ objectFit: 'cover' }}
                />
              </li>

              <li className="item-img box-4">
                <ImgGrid
                  src={solar}
                  alt="solar panel"
                  placeholder="blur"
                  priority={true}
                  fill={false}
                  style={{ objectFit: 'cover' }}
                />
              </li>
              <li className="item box-5">
                <div className="item-title--block">
                  <Image src={cpu} alt="circle icon" width={16} height={16} />
                  <span className="item-title">Innovation</span>
                </div>
                <span className="item-text">
                  we use the latest technology to implement non-standard
                  solutions
                </span>
              </li>
              <li className="item box-6">
                <div className="item-title--block">
                  <Image
                    src={ranking}
                    alt="circle icon"
                    width={16}
                    height={16}
                  />
                  <span className="item-title">Quality</span>
                </div>

                <span className="item-text">
                  we do not strive to be the first among others, but we want to
                  be the best in our business
                </span>
              </li>
            </ul>
          </>
        )}
      </>
    </Layout>
  );
};
export default ValuesSection;
