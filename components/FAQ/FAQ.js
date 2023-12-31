import { Link } from 'react-scroll';
import { useMediaQuery } from '@mui/material';
import CustomizedAccordions from './Accordion/Accordion.js';
import { Section } from './FAQ.styled.js';

const FaqSection = () => {
  const tablet = useMediaQuery('(min-width:768px)');
  return (
    <Section id="FAQ">
      {!tablet && (
        <>
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
        </>
      )}
      {tablet && (
        <>
          <CustomizedAccordions />
          <div className="content-layout">
            <h2 className="title">Frequently Asked Questions</h2>
            <p className="text">Didn&#39;t find the answer to your question?</p>
            <Link
              className="btn"
              to="Contacts"
              spy={true}
              smooth={true}
              duration={500}
            >
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
            </Link>
          </div>
        </>
      )}
    </Section>
  );
};
export default FaqSection;
