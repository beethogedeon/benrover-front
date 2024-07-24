import { Icon } from '@iconify/react';
import React from 'react';
import Slider from 'react-slick';
import Div from '../Div';
import Team from '../Team';
const teamData = [
  {
    memberImage: '/images/Teams/2.png',
    memberName: 'Mohamed SALIFOU',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: 'https://linkedin.com/in/mohamed-salifou/65ab18194',
      github: 'https://github.com/moh-maker229',
    },
  },
  {
    memberImage: '/images/Teams/4.png',
    memberName: 'Prudence AYIVI',
    memberDesignation: 'Head of SpaceX Benin',
    memberSocial: {
      linkedin: 'https://linkedin.com/in/prudence-ayivi',
      github: 'https://github.com/PrudenceEA',
    },
  },
  {
    memberImage: '/images/Teams/3.png',
    memberName: 'Haby SOW',
    memberDesignation: 'CEO@Company',
    memberSocial: {
      linkedin: 'https://linkedin.com/in/yay%C3%A9-haby-sow-b61b2b236',
      github: '/',
    },
  },
  {
    memberImage: '/images/Teams/5.png',
    memberName: 'Arcady RODRIGUEZ',
    memberDesignation: 'Electromechanical Engineer',
    memberSocial: {
      linkedin: 'https://linkedin.com/in/arcady-rodriguez',
      github: 'https://github.com/0v3rs1gh73r22',
    },
  },
  {
    memberImage: '/images/Teams/1.png',
    memberName: 'Gedeon GBEDONOU',
    memberDesignation: 'Software Engineer',
    memberSocial: {
      linkedin: 'https://linkedin.com/in/gedeongbedonou',
      github: 'https://github.com/beethogedeon',
    },
  },
];

export default function TeamSlider() {
  /** Team Member Data **/

  /** Slider Settings **/
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-gap-24 cs-arrow_style2">
      {teamData.map((item, index) => (
        <Div key={index}>
          <Team
            memberImage={item.memberImage}
            memberName={item.memberName}
            memberDesignation={item.memberDesignation}
            memberSocial={item.memberSocial}
          />
        </Div>
      ))}
    </Slider>
  );
}
