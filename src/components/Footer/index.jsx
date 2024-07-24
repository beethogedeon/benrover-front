import React from 'react';
import Div from '../Div';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import MenuWidget from '../Widget/MenuWidget';
import SocialWidget from '../Widget/SocialWidget';
import TextWidget from '../Widget/TextWidget';
import './footer.scss';
const copyrightLinks = [
  {
    title: 'Documentation',
    href: 'https://benrover-24.github.io/docs',
  },
  {
    title: 'Code Source',
    href: 'https://github.com/benrover-24',
  },
];


export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-6 col-sm-6">
              <Div className="cs-footer_item">
                <TextWidget
                  logoSrc="/images/Tekbot_2.svg"
                  logoAlt="BenRover - Tekbot Robotics"
                  text=""
                />
                <SocialWidget />
              </Div>
            </Div>
            <Div className="col-lg-6 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget title="Contact Us" />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">Copyright © 2024 Tekbot Robotics.</Div>
          </Div>
          <Div className="cs-bottom_footer_right">
            <MenuWidget menuItems={copyrightLinks} variant=" cs-style2" />
          </Div>
        </Div>
      </Div>
    </footer>
  );
}
