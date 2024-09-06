import React from 'react';
import Div from '../Div';
import './logolist.scss';
const partnerLogos = [
  {
    src: '/images/tekbot.png',
    alt: 'Partner',
  },
  {
    src: '/images/scop.png',
    alt: 'Partner',
  },
  {
    src: '/images/sirius.png',
    alt: 'Partner',
  },
  {
    src: '/images/hapi.png',
    alt: 'Partner',
  },
];

export default function LogoList() {
  return (
    <Div className="cs-partner_logo_wrap">
      {partnerLogos.map((partnerLogo, index) => (
        <div className="cs-partner_logo" key={index}>
          <img src={partnerLogo.src} alt={partnerLogo.alt} />
        </div>
      ))}
    </Div>
  );
}
