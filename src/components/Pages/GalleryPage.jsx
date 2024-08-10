import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import GalleryStyle2 from '../Gallery/GalleryStyle2';
import Gallery from '../Gallery';

export default function GalleryPage() {
    pageTitle('Notre équipe');
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return (
      <>
        <PageHeading
          title="La galerie"
          bgSrc="images/team-hero-bg.webp"
          pageLinkText="Galerie"
        />
        <Spacing lg="145" md="80" />
        <Div className="container">
          <SectionHeading
            title="Découvrez les photos de nos événements et de nos robots."
            subtitle="La galerie"
          />
          <Spacing lg="90" md="45" />

          <Gallery />

        <Div className="container">
          <Spacing lg="90" md="45" />
          <Div className="container" id="sponsor">
          <Cta
            title="Vous pouvez soutenir<br /> notre projet en faisant un simple geste !"
            btnText="Faire un don"
            btnLink="/donation"
            bgSrc="/images/cta_bg.png"
          />
        </Div>
        </Div>
        </Div>
      </>
    );
  }
  