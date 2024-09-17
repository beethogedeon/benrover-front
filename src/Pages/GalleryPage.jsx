import React, { useEffect } from 'react';
import { pageTitle } from '../helper';
import Cta from '../components/Cta';
import PageHeading from '../components/PageHeading';
import Div from '../components/Div';
import SectionHeading from '../components/SectionHeading';
import Spacing from '../components/Spacing';
//import GalleryStyle2 from '../components/Gallery/GalleryStyle2';
import Gallery from '../components/Gallery';

export default function GalleryPage() {
    pageTitle('La Galerie');
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return (
      <>
        <PageHeading
          title="La galerie"
          bgSrc="images/cta_bg_2.png"
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
  