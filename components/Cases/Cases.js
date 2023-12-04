import { Layout } from './Cases.styled';
import SliderComponent from './Slides/Slider';
import lviv from '../../img/content/slides/lviv.png';
import zhytomir from '../../img/content/slides/zhytomir.png';
import rivne from '../../img/content/slides/rivne.png';
import kherson from '../../img/content/slides/kherson.png';
import zap from '../../img/content/slides/zap.png';
import { useMediaQuery } from '@mui/material';

const CasesSection = () => {
  const tablet = useMediaQuery('(min-width:768px)');
  const cases = [
    {
      id: 1,
      img: lviv,
      location: 'Lviv Region, Radekhiv town',
      customer: 'Private Enterprise “ZAKHIDNYI BUH”',
      project: 'Wind Power for auto field irrigation',
      date: 'July 2023',
    },
    {
      id: 2,
      img: zhytomir,
      location: 'Zhytomyr city',
      customer: 'Private Enterprise “Bosch”',
      project: 'Solar Panels for industrial use',
      date: 'November 2023',
    },
    {
      id: 3,
      img: rivne,
      location: 'Rivne city',
      customer: 'Private Enterprise “Biotech”',
      project: 'Thermal modules',
      date: 'October 2023',
    },
    {
      id: 4,
      img: kherson,
      location: 'Kherson city',
      customer: 'Private Enterprise “HealthyFarm”',
      project: 'Wind power',
      date: 'September 2021',
    },
    {
      id: 5,
      img: zap,
      location: 'Zaporizhia city',
      customer: 'Private Enterprise “Biotech”',
      project: 'Mini nuclear stations',
      date: 'May 2021',
    },
  ];

  return (
    <Layout>
      {!tablet && <h1 className="title">Successful cases of our company</h1>}
      <SliderComponent cases={cases} />
    </Layout>
  );
};
export default CasesSection;
