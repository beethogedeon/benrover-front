import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import Team from '../Team';
import MultidisciplinaryTeamComponent from '../TeamCharts';

const teamData = [
  {
    memberImage: '/images/member_1.jpeg',
    memberName: 'Melon Bulgery',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
  {
    memberImage: '/images/member_2.jpeg',
    memberName: 'Olinaz Fushi',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
  {
    memberImage: '/images/member_3.jpeg',
    memberName: 'David Elone',
    memberDesignation: 'React Developer',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
  {
    memberImage: '/images/member_4.jpeg',
    memberName: 'Melina Opole',
    memberDesignation: 'WP Developer',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
  {
    memberImage: '/images/member_3.jpeg',
    memberName: 'David Elone',
    memberDesignation: 'React Developer',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
  {
    memberImage: '/images/member_4.jpeg',
    memberName: 'Melina Opole',
    memberDesignation: 'WP Developer',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
  {
    memberImage: '/images/member_1.jpeg',
    memberName: 'Melon Bulgery',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
  {
    memberImage: '/images/member_2.jpeg',
    memberName: 'Olinaz Fushi',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
];

export default function TeamPage() {
  pageTitle('Team');

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
            <Div className="col-lg-6">
              <img src="images/IT.png" alt="IT" />
            </Div>
            <Div className="col-lg-6">
              <h2>Information Technology</h2>
              <p className='mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis, odio culpa cumque quae, obcaecati ducimus deleniti cupiditate sapiente ullam sit ab magnam nobis. Illum esse ipsum consequuntur officiis facilis.
              </p>
            </Div>
            <Spacing lg="90" md="45" />
            
            <Div className="col-lg-6">
              <h2>Mechanical</h2>
              <p className='mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis, odio culpa cumque quae, obcaecati ducimus deleniti cupiditate sapiente ullam sit ab magnam nobis. Illum esse ipsum consequuntur officiis facilis.
              </p>
            </Div>
            <Div className="col-lg-6">
              <img src="images/Mechanical.png" alt="IT" />
            </Div>
            <Spacing lg="90" md="45" />
            <Div className="col-lg-6">
              <img src="images/Electronical.png" alt="Electronical" />
            </Div>
            <Div className="col-lg-6">
              <h2>Electronical</h2>
              <p className='mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis, odio culpa cumque quae, obcaecati ducimus deleniti cupiditate sapiente ullam sit ab magnam nobis. Illum esse ipsum consequuntur officiis facilis.
              </p>
            </Div>
            <Spacing lg="90" md="45" />
            <Div className="col-lg-6">
              <h2>Project Management</h2>
              <p className='mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis, odio culpa cumque quae, obcaecati ducimus deleniti cupiditate sapiente ullam sit ab magnam nobis. Illum esse ipsum consequuntur officiis facilis.
              </p>
            </Div>
            <Div className="col-lg-6">
              <img src="images/Project Management.png" alt="Project Management" />
            </Div>
          </Div>
        </Div>
        <Spacing lg="90" md="45" />
        <Div className="container">
          <Cta
            title="Let’s disscuse make <br />something <i>cool</i> together"
            btnText="Apply For Meeting"
            btnLink="/contact"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
      </Div>
    </>
  );
}
