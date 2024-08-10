import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import Team from '../Team';
import MultidisciplinaryTeamComponent from '../TeamCharts';

export default function TeamPage() {
  pageTitle('Notre équipe');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeading
        title="Notre équipe"
        bgSrc="images/team-hero-bg.webp"
        pageLinkText="Team"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Une diversité..."
          subtitle="Notre équipe"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <MultidisciplinaryTeamComponent />
        <Spacing lg="70" md="50" />
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="4 sous-équipes pour réaliser ce projet"
                subtitle="Nos sous-équipes"
              />
              <Spacing lg="90" md="45" />
            </Div>
          </Div>
        </Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-6 ">
              <img className='rounded-4 shadow' src="images/IT.png" alt="IT"/>
            </Div>
            <Div className="col-lg-6">
              <h2>Technologie de l'information</h2>
              <p className='mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis, odio culpa cumque quae, obcaecati ducimus deleniti cupiditate sapiente ullam sit ab magnam nobis. Illum esse ipsum consequuntur officiis facilis.
              </p>
            </Div>
            <Spacing lg="90" md="45" />
            <Div className="col-lg-6 d-block d-lg-none d-xl-none">
              <img className='rounded-4 shadow' src="images/Mechanical.png" alt="Mechanical" />
            </Div>
            <Div className="col-lg-6">
              <h2>Mechanical</h2>
              <p className='mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis, odio culpa cumque quae, obcaecati ducimus deleniti cupiditate sapiente ullam sit ab magnam nobis. Illum esse ipsum consequuntur officiis facilis.
              </p>
            </Div>
            <Div className="col-lg-6 d-none d-lg-block d-xl-block">
              <img className='rounded-4 shadow' src="images/Mechanical.png" alt="Mechanical" />
            </Div>
            <Spacing lg="90" md="45" />
            <Div className="col-lg-6">
              <img className='rounded-4 shadow' src="images/Electronical.png" alt="Electronical" />
            </Div>
            <Div className="col-lg-6">
              <h2>Electronical</h2>
              <p className='mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis, odio culpa cumque quae, obcaecati ducimus deleniti cupiditate sapiente ullam sit ab magnam nobis. Illum esse ipsum consequuntur officiis facilis.
              </p>
            </Div>
            <Spacing lg="90" md="45" />
            <Div className="col-lg-6 d-block d-lg-none d-xl-none">
              <img className='rounded-4 shadow' src="images/Project Management.png" alt="Project Management" />
            </Div>
            <Div className="col-lg-6">
              <h2>Project Management</h2>
              <p className='mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis, odio culpa cumque quae, obcaecati ducimus deleniti cupiditate sapiente ullam sit ab magnam nobis. Illum esse ipsum consequuntur officiis facilis.
              </p>
            </Div>
            <Div className="col-lg-6 d-none d-lg-block d-xl-block">
              <img className='rounded-4 shadow' src="images/Project Management.png" alt="Project Management" />
            </Div>
          </Div>
        </Div>
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
    </>
  );
}
