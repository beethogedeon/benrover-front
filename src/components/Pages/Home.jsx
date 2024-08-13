import React, { useEffect } from 'react';
import Card from '../Card';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import MovingText from '../MovingText';
import VideoModal from '../VideoModal';
import { pageTitle } from '../../helper';
//import { HashLink as Link } from 'react-router-hash-link';

const Hero = React.lazy(() => import('../Hero'));
const FunFact = React.lazy(() => import('../FunFact'));
//const RoverFeatSpecs = React.lazy(() => import('../RoverSpecs'));
const Cta = React.lazy(() => import('../Cta'));
const PortfolioSlider = React.lazy(() => import('../Slider/PortfolioSlider'));
const TeamSlider = React.lazy(() => import('../Slider/TeamSlider'));
const LogoList = React.lazy(() => import('../LogoList'));
const Goals = React.lazy(() => import('../Slider/Goals'));
const BeninRevele = React.lazy(() => import('../BeninRevele'));

// Hero Social Links
const heroSocialLinks = [
  {
    name: 'Github',
    links: 'https://github.com/benrover-24',
  },
  {
    name: 'LinkedIn',
    links: 'https://bj.linkedin.com/company/tekbot-robotics',
  },
];

// FunFact Data
const funfaceData = [
  /*{
    title: 'Students & Engineers',
    factNumber: '+21',
  },*/
];
const portfolioData = [
  {
    title: 'Conception 3D du rover',
    subtitle: 'Voir les détails',
    href: 'https://benrover-24.github.io/docs',
    src: '/images/Gallery/1.webp',
  },
  {
    title: 'Conception 3D du rover',
    subtitle: 'Voir les détails',
    href: 'https://benrover-24.github.io/docs',
    src: '/images/Gallery/2.webp',
  },
  {
    title: 'Conception 3D du rover',
    subtitle: 'Voir les détails',
    href: 'https://benrover-24.github.io/docs',
    src: '/images/Gallery/3.webp',
  },
  {
    title: 'Méchanique',
    subtitle: 'Voir les détails',
    href: 'https://benrover-24.github.io/docs',
    src: '/images/Gallery/4.webp',
  },

  {
    title: 'Impression 3D',
    subtitle: 'Voir les détails',
    href: 'https://benrover-24.github.io/docs',
    src: '/images/Gallery/5.webp',
  },

  {
    title: 'Electronique',
    subtitle: 'Voir les détails',
    href: 'https://benrover-24.github.io/docs',
    src: '/images/Gallery/6.webp',
  },

  {
    title: 'Electronique',
    subtitle: 'Voir les détails',
    href: 'https://benrover-24.github.io/docs',
    src: '/images/Gallery/7.webp',
  },
];

export default function Home() {
  pageTitle('Accueil');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Start Hero Section */}
      <Hero
        title="Rover :"
        subtitle="Ensemble vers Mars."
        btnText="Une équipe de <mark>Jeunes Béninois(es)</mark> passionnée, engagée à concevoir et fabriquer un rover <mark>Made in Benin</mark> pour les missions sur <mark>Mars</mark>."
        btnLink="https://github.com/benrover-24"
        scrollDownId="#gallery"
        socialLinksHeading="Suivez-nous"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="/images/hero.webp"
      />
      {/* End Hero Section */}

      {/* Start FunFact Section */}
      <div className="container" id="about">
        <FunFact
          variant="cs-type1"
          title="A Propos du projet"
          subtitle="Nous participons à travers TEKBOT-ROBOTICS, leader en robotique au Bénin, à la première compétition africaine de rover 'Cars for Mars', en l’utilisant comme levier pour développer des compétences techniques clés, innover, et promouvoir les STIM au Bénin."
          data={funfaceData}
        />
      </div>
      {/* End FunFact Section */}

      

      {/* Start Portfolio Section
      <Spacing lg="150" md="50" />
      <Div>
        <Div className="container" id="specs">
          <SectionHeading
            title="Fonctionnalités et Spéfications"
            subtitle="Le rover"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
        </Div>
        <RoverFeatSpecs/>
      </Div>
      {/* End Portfolio Section */}

<Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_2" id="goals">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Construire - Booster - Inspirer"
                subtitle="NOS OBJECTIFS"
                variant="cs-style1"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <Div className="row">
                <Goals />
              </Div>
            </Div>
            
          </Div>
        </Div>
      </Div>

      {/*<Div className="container">
        <Div className="row">
          <Div className="col-lg-6">
            <img src="/images/benin-revele.png" alt="" height={'70px!important'}/>
          </Div>
          <Div className="col-lg-6 ">
            <h2 className="cs-hero_title align-middle">
            From Benin to the World
            </h2>
          </Div>
        </Div>
      </Div>*/}
      <Spacing lg="150" md="80" />
      <BeninRevele />
      <Spacing lg="150" md="50" />
      <Div>
        <Div className="container" id="gallery">
          <SectionHeading
            title="Découvrez notre travail"
            subtitle="LA GALERIE"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
        </Div>
        <PortfolioSlider data={portfolioData} />
      </Div>
      {/* End Portfolio Section */}

      {/* Start Awards Section */}
      
      {/* End Awards Section */}

      {/* Start Video Block Section */}
      <Spacing lg="130" md="70" />
      <Div className="container">
        <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
        Nous y travaillons...
        </h2>
        <Spacing lg="70" md="70" />
        <VideoModal
          videoSrc="https://player.vimeo.com/video/997145295?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          bgUrl="/images/video_bg.png"
        />
      </Div>
      {/* End Video Block Section */}

      {/* Start Team Section */}
      <Spacing lg="145" md="80" />
      <Div className="container" id="team">
        <SectionHeading
          title="Une équipe multidisciplinaire..."
          subtitle="Notre équipe"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider photomode="1"/>
      </Div>
      {/*<Spacing lg="15" md="7" />

      <Div className="container" id="team">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider photomode="2"/>
      </Div>
      <Spacing lg="15" md="7" />*/}
      {/* End Team Section */}

      {/* Start Testimonial Section */}
      {/*<TestimonialSlider />*/}
      {/* End Testimonial Section */}

      {/* Start Blog Section */}
      {/*
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Explore recent publication"
                subtitle="Our Blog"
                btnText="View More Blog"
                btnLink="/blog"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <Div className="cs-half_of_full_width">
                <PostSlider />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>*/}
      {/* End Blog Section */}

      {/* Start MovingText Section */}
      <Spacing lg="125" md="70" />
      <MovingText text="Le Bénin révélé !  " />

      {/* Start Service Section */}
      <Spacing lg="150" md="80" />
      <Div id="service">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="4 sous-équipes pour réaliser ce projet"
                subtitle="Nos sous-équipes"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Informatique"
                    link="https://benrover-24.github.io/docs/it"
                    src="/images/Departments/IT.png"
                    alt="IT Department"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Electronique"
                    link="https://benrover-24.github.io/docs/electronics"
                    src="/images/Departments/Electronic.png"
                    alt="Electronic Department"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Mécanique"
                    link="https://benrover-24.github.io/docs/mechanics"
                    src="/images/Departments/Mechanic.png"
                    alt="Mechanic Department"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Astronomie"
                    link="https://benrover-24.github.io/docs/space"
                    src="/images/Departments/Space.png"
                    alt="Space science Department"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Service Section */}
      <Spacing lg="105" md="70" />
      {/* End MovingText Section */}

      {/* Start LogoList Section */}
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-4">
              <SectionHeading
                title="Merci pour votre soutien..."
                subtitle="Nos généreux sponsors et donateurs"
              />
              <Spacing lg="90" md="45" />
          </Div>
        </Div>
        <LogoList />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End LogoList Section */}

      {/* Start CTA Section */}
      <Div className="container" id="sponsor">
        <Cta
          title="Vous pouvez soutenir<br /> notre projet en faisant un simple geste !"
          btnText="Faire un don"
          btnLink="/donation"
          bgSrc="/images/cta_bg.png"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
