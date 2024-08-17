import React, { useEffect } from 'react';
import { pageTitle } from '../helper';
import Cta from '../components/Cta';
import PageHeading from '../components/PageHeading';
import Div from '../components/Div';
import SectionHeading from '../components/SectionHeading';
import Spacing from '../components/Spacing';
import Competitions from '../components/Competitions';

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
          subText="Organisé par Cars4Mars"
        />
        <Div className="container">
          
          <Competitions />

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
  