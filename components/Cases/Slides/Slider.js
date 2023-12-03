import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { SliderLayout, Slide } from './Slider.styled';

const SliderComponent = ({ cases }) => {
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(1);
  const [qtySlide, setQtySlide] = useState(cases.length);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setActiveSlide(current + 1),
  };

  return (
    <SliderLayout>
      <div className="slider-head-section">
        <div className="counter-wrapper">
          {activeSlide > 9 ? (
            <span className="counter-active">{activeSlide}/</span>
          ) : (
            <span className="counter-active">0{activeSlide}/</span>
          )}

          {qtySlide > 9 ? (
            <span className="counter-qty">{qtySlide}</span>
          ) : (
            <span className="counter-qty">0{qtySlide}</span>
          )}
        </div>
        <div className="button-wrapper">
          <button className="button-slider" onClick={previous}>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.3542 8.89343L5.24925 17.9984L14.3542 27.1034"
                stroke="none"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M30.749 17.9988H5.50402"
                stroke="none"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="button-slider" onClick={next}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                d="M21.6458 8.89343L30.7508 17.9984L21.6458 27.1034"
                stroke="none"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.25098 17.9988H30.496"
                stroke="none"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {cases.map(({ id, img, location, customer, project, date }) => (
          <Slide key={id} className="slide">
            <Image
              className="slide-img"
              src={img}
              alt={project}
              placeholder="blur"
            />
            <div className="slide-content">
              <div className="slide-content--wrapper">
                <p className="slide-content--customer">
                  {location},{customer}
                </p>
                <div>
                  <button className="slider-btn" onClick={next}>
                    <svg
                      className="slider-btn--arrow"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="arrow-right">
                        <g id="Group 23">
                          <path
                            id="Vector"
                            d="M10.9976 6.98669L21.0125 6.98669L21.0125 17.0017"
                            stroke="none"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            id="Vector_2"
                            d="M6.98901 21.0109L20.8731 7.12688"
                            stroke="none"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="slide-signature">
                <span className="slide-signature--project">{project}</span>
                <span className="slide-signature--date">{date}</span>
              </div>
            </div>
          </Slide>
        ))}
      </Slider>
    </SliderLayout>
  );
};
export default SliderComponent;
