import { Icon } from '@iconify/react';
import React from 'react';
import Slider from 'react-slick';
import Div from '../Div';
import Team from '../Team';
const teamData = [
  {
    memberImage: '/images/Teams/Haby.png',
    memberImage2: '/images/Teams2/Haby.png',
    memberName: 'Haby SOW',
    memberDesignation: 'Electronic Engineer',
    memberSocial: {
      linkedin: 'https://linkedin.com/in/yay%C3%A9-haby-sow-b61b2b236',
      github: '/',
    },
  },
  {
    memberImage: '/images/Teams/Edwige.png',
    memberImage2: '/images/Teams2/Edwige.png',
    memberName:'Edwige KPADONOU',
    memberDesignation: 'Mechanical Engineering Student',
    memberSocial: {
      linkedin: 'https://linkedin.com/in/edwige-kpadonou-b2782a320',
      github: 'https://github.com/',
    },
  },
  {
    memberImage: '/images/Teams/Hortence.png',
    memberImage2: '/images/Teams2/Hortence.png',
    memberName:'Hortence AZANDOSSESSI',
    memberDesignation: 'Software Engineering Student',
    memberSocial: {
      linkedin: 'https://www.linkedin.com/in/hortence-azandossessi/',
      github: 'https://github.com/',
    },
  },
  {
    memberImage: '/images/Teams/Asma.png',
    memberImage2: '/images/Teams2/Asma.png',
    memberName:'Asmaa KORA ZAKI',
    memberDesignation: 'Mechanical Engineering Student',
    memberSocial: {
      linkedin: 'https://www.linkedin.com/in/asmaa-kora-zaki-151b3a22a/',
      github: 'https://github.com/',
    },
  },
  {
    memberImage: '/images/Teams/Mohamed.png',
    memberImage2: '/images/Teams2/Mohamed.png',
    memberName: 'Mohamed SALIFOU',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: 'https://linkedin.com/in/mohamed-salifou/65ab18194',
      github: 'https://github.com/moh-maker229',
    },
  },
  {
    memberImage: '/images/Teams/Prudence.png',
    memberImage2: '/images/Teams2/Prudence.png',
    memberName: 'Prudence AYIVI',
    memberDesignation: 'Space Science Specialist',
    memberSocial: {
      linkedin: 'https://linkedin.com/in/prudence-ayivi',
      github: 'https://github.com/PrudenceEA',
    },
  },
  {
    memberImage: '/images/Teams/Arcady.png',
    memberImage2: '/images/Teams2/Arcady.png',
    memberName: 'Arcady RODRIGUEZ',
    memberDesignation: 'R&D Engineer',
    memberSocial: {
      linkedin: 'https://linkedin.com/in/arcady-rodriguez',
      github: 'https://github.com/0v3rs1gh73r22',
    },
  },
  {
    memberImage: '/images/Teams/Gedeon.png',
    memberImage2: '/images/Teams2/Gedeon.png',
    memberName: 'Gedeon GBEDONOU',
    memberDesignation: 'Software Engineer',
    memberSocial: {
      linkedin: 'https://linkedin.com/in/gedeongbedonou',
      github: 'https://github.com/beethogedeon',
    },
  },
  {
    memberImage: '/images/Teams/Samir.png',
    memberImage2: '/images/Teams2/Samir.png',
    memberName: 'Samir BONI',
    memberDesignation: 'Software Engineer',
    memberSocial: {
      linkedin: 'https://www.linkedin.com/in/samir-boni-200456203',
      github: 'https://github.com/sam24-ds',
    },
  },
  {
    memberImage: '/images/Teams/Sergino.png',
    memberImage2: '/images/Teams2/Sergino.png',
    memberName: 'Sergino  GOUNOUKPEROU',
    memberDesignation: 'Software Engineer',
    memberSocial: {
      linkedin: 'https://linkedin.com/in/gedeongbedonou',
      github: 'https://github.com/beethogedeon',
    },
  },
  {
    memberImage: '/images/Teams/Judicael.png',
    memberImage2: '/images/Teams2/Judicael.png',
    memberName: 'Judicaël ADIKPETO',
    memberDesignation: 'Telecoms and ICT Engineering Technician',
    memberSocial: {
      linkedin: 'https://www.linkedin.com/in/judica%C3%ABl-mahoukp%C3%A8-adikpeto-40411120b/',
      github: 'https://github.com/iudhael/',
    },
  },
  {
    memberImage: '/images/Teams/Aymar.png',
    memberImage2: '/images/Teams2/Aymar.png',
    memberName: 'Aymar PITO',
    memberDesignation: 'Mechanical Engineering Student',
    memberSocial: {
      linkedin: 'https://www.linkedin.com/in/aymar-pito-731201260',
      github: 'https://github.com/AYMARPITO',
    },
  },
  {
    memberImage: '/images/Teams/Donald.png',
    memberImage2: '/images/Teams2/Donald.png',
    memberName: 'Donald OBA',
    memberDesignation: 'Robotics Engineering Student',
    memberSocial: {
      linkedin: '#',
      github: 'https://github.com/donaldoba',
    },
  },
  {
    memberImage: '/images/Teams/Elfried.png',
    memberImage2: '/images/Teams2/Elfried.png',
    memberName: 'Elfried KINZOUN',
    memberDesignation: 'Étudiant en IA',
    memberSocial: {
      linkedin: 'https://www.linkedin.com/in/elfried-kinzoun-858063278',
      github: 'https://github.com/elfried96',
    },
  },
  {
    memberImage: '/images/Teams/Morel.png',
    memberImage2: '/images/Teams2/Morel.png',
    memberName: 'Mahudjro BONOU-DAH',
    memberDesignation: 'Electronic Engineering Technician',
    memberSocial: {
      linkedin: 'https://www.linkedin.com/in/maurel-bonou-dah-bb4226247',
      github: 'https://github.com/Mahudjro369',
    },
  },
  {
    memberImage: '/images/Teams/Turibio.png',
    memberImage2: '/images/Teams2/Turibio.png',
    memberName: 'Turibio KEKE',
    memberDesignation: 'Software Engineer',
    memberSocial: {
      linkedin: 'https://linkedin.com/in/MahuviviTuribio',
      github: 'https://github.com/turibiok',
    },
  },
  {
    memberImage: '/images/Teams/Eliakim.png',
    memberImage2: '/images/Teams2/Eliakim.png',
    memberName: 'Eliakim GOUNON',
    memberDesignation: 'Software Engineer',
    memberSocial: {
      linkedin: 'https://linkedin.com/in/eliakimceleste',
      github: '#',
    },
  },
  {
    memberImage: '/images/Teams/Gildas.png',
    memberImage2: '/images/Teams2/Gildas.png',
    memberName: 'Gildas CHABI CHADRAC',
    memberDesignation: 'Electronic Engineering Technician',
    memberSocial: {
      linkedin: 'https://www.linkedin.com/in/gildas-chabi-chadrac/',
      github: 'https://github.com/gildas167/',
    },
  },
  {
    memberImage: '/images/Teams/Jarod.png',
    memberImage2: '/images/Teams2/Jarod.png',
    memberName: 'Jarod AMEVO',
    memberDesignation: 'Mechanical Engineering Student',
    memberSocial: {
      linkedin: 'https://www.linkedin.com/in/jarod-amevo-b3a567233',
      github: 'https://github.com/Dominique75710',
    },
  },
];

export default function TeamSlider({photomode}) {
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
    slidesToScroll: 4,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-gap-24 cs-arrow_style2">
      {teamData.map((item, index) => (
        <Div key={index}>
          <Team
            memberImage={photomode==="2"? item.memberImage2: item.memberImage}
            memberName={item.memberName}
            memberDesignation={item.memberDesignation}
            memberSocial={item.memberSocial}
          />
        </Div>
      ))}
    </Slider>
  );
}
