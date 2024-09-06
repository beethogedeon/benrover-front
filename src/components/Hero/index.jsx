import React from 'react';
import parse from 'html-react-parser';
import './hero.scss';
import Div from '../Div';
import VerticalLinks from '../VerticalLinks';
import SponsorButton from '../SponsorButton';

export default function Hero({
  title,
  subtitle,
  btnText,
  btnLink,
  scrollDownId,
  socialLinksHeading,
  heroSocialLinks,
  bgImageUrl,
}) {
  return (
    <>
    <Div
      className="cs-hero cs-style1 cs-bg cs-fixed_bg cs-shape_wrap_1"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="container">
        <Div className="cs-hero_text">
          <h4 className="cs-hero_title d-inline">{parse(title)}</h4><h3 className='display-2 d-inline'><i>{' '}{subtitle}</i></h3>
          {/*<h4 className="display-2"><i>Pionniers du spatial au Bénin...</i></h4>*/}
          <Div>
            <Div>
              {/*<Button btnLink={btnLink} btnText={btnText} />*/}
              <span className="fs-2 tracking-tighter lh-base">{parse(btnText)}</span>
            </Div>
          </Div>
        </Div>
        <Div className="container mt-20 align-items-end flex-column">
          <Div className="row d-flex justify-content-center align-items-center">
              <Div className="col d-block d-lg-none">
                <SponsorButton />
              </Div>
          </Div>

        </Div>
        
      </Div>
      <VerticalLinks data={heroSocialLinks} title={socialLinksHeading} />
      {/*<a href={scrollDownId} className="cs-down_btn">
        .
      </a>*/}
      
    </Div>
    
    </>
  );
}
