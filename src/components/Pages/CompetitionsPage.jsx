import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';

export default function CompetitionsPage() {
    pageTitle('Compétitions');
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return (
      <>
        <PageHeading
          title="African Rover Challenge"
          bgSrc="images/team-hero-bg.webp"
          pageLinkText="Competitions"
        />
        <Spacing lg="145" md="80" />
        <Div className="container">
          <SectionHeading
            title="Un événement incontournable pour les passionnés de la robotique."
            subtitle="African Rover Challenge"
          />
          <Spacing lg="90" md="45" />

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
  