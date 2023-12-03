import CustomizedAccordions from './Accordion/Accordion.js';
import { Section } from './FAQ.styled.js';

const FaqSection = () => {
  return (
    <Section>
      <h2 className="title">Frequently Asked Questions</h2>
      <CustomizedAccordions />
      <p className="text">Didn&#39;t find the answer to your question?</p>
      <div className="btn">
        <span>Contact Us</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
        >
          <circle cx="7" cy="7.5" r="7" fill="#173D33" />
        </svg>
      </div>
    </Section>
  );
};
export default FaqSection;
