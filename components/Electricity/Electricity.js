import { Layout } from './Electricity.styled';

const ElectricitySection = () => {
  return (
    <Layout>
      <h2 className="title">Electricity we produced for all time</h2>
      <div className="line"></div>
      <div className="wrapper">
        <div className="counter">1.134.147.814</div>
        <div className="txt">kWh</div>
      </div>
    </Layout>
  );
};
export default ElectricitySection;
