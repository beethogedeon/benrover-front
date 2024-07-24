import React, { useEffect } from 'react';
import Card from '../Card';
import FunFact from '../FunFact';
import Hero from '../Hero';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import Cta from '../Cta';
import LogoList from '../LogoList';
import MovingText from '../MovingText';
import PortfolioSlider from '../Slider/PortfolioSlider';
import TeamSlider from '../Slider/TeamSlider';
import VideoModal from '../VideoModal';
import TimelineSlider from '../Slider/TimelineSlider';
import { pageTitle } from '../../helper';
import { HashLink as Link } from 'react-router-hash-link';
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
    title: 'Rover Conception',
    subtitle: 'See Details',
    href: 'https://benrover-24.github.io/docs',
    src: '/images/Gallery/1.png',
  },
  {
    title: 'Rover Conception',
    subtitle: 'See Details',
    href: 'https://benrover-24.github.io/docs',
    src: '/images/Gallery/2.png',
  },
  {
    title: 'Rover Conception',
    subtitle: 'See Details',
    href: 'https://benrover-24.github.io/docs',
    src: '/images/Gallery/3.png',
  },
  {
    title: 'Engine',
    subtitle: 'See Details',
    href: 'https://benrover-24.github.io/docs',
    src: '/images/Gallery/4.png',
  },

  {
    title: '3D Printing',
    subtitle: 'See Details',
    href: 'https://benrover-24.github.io/docs',
    src: '/images/Gallery/5.png',
  },

  {
    title: 'Electronic',
    subtitle: 'See Details',
    href: 'https://benrover-24.github.io/docs',
    src: '/images/Gallery/6.png',
  },

  {
    title: 'Electronic',
    subtitle: 'See Details',
    href: 'https://benrover-24.github.io/docs',
    src: '/images/Gallery/7.png',
  },
];

export default function Home() {
  pageTitle('Home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Start Hero Section */}
      <Hero
        title="A rover<br/> for mars missions"
        subtitle="THIS PROJECT HAS BEEN BUILT BY A TEAM OF YOUNG BENIN ENGINEERS AND STUDENTS AS PART OF AFRICAN ROVER CHALLENGE."
        btnText="See one Github"
        btnLink="https://github.com/benrover-24"
        scrollDownId="#gallery"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="/images/hero.jpg"
      />
      {/* End Hero Section */}

      {/* Start FunFact Section */}
      <div className="container" id="about">
        <FunFact
          variant="cs-type1"
          title="AFRICAN ROVER CHALLENGE"
          subtitle="The challenge is to design and build a Mars rover prototype. This is not expected to be a space-grade machine and does not need to be ready to operate in actual space or Mars conditions.<br/><br/>
          It's a small, mobile robot, controlled wirelessly with an independent power source."
          data={funfaceData}
        />
      </div>
      {/* End FunFact Section */}

      

      {/* Start Portfolio Section */}
      <Spacing lg="150" md="50" />
      <Div>
        <Div className="container" id="gallery">
          <SectionHeading
            title="Look at our works"
            subtitle="OUR GALLERY"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
        </Div>
        <PortfolioSlider data={portfolioData} />
      </Div>
      {/* End Portfolio Section */}

      {/* Start Awards Section */}
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_2" id="goals">
        <Div className="cs-shape_2">
          <Div />
        </Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Build - Boost - Inspire"
                subtitle="OUR GOALS & OBJECTIVES"
                variant="cs-style1"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <TimelineSlider />
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Awards Section */}

      {/* Start Video Block Section */}
      <Spacing lg="130" md="70" />
      <Div className="container">
        <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
        We're still building...
        </h2>
        <Spacing lg="70" md="70" />
        <VideoModal
          videoSrc="https://www.youtube.com/watch?v=yqXpuzi4ek0"
          bgUrl="/images/video_bg.png"
        />
      </Div>
      {/* End Video Block Section */}

      {/* Start Team Section */}
      <Spacing lg="145" md="80" />
      <Div className="container" id="team">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div>
      <Spacing lg="15" md="7" />
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
      <MovingText text="Keep moving forward !" />

      {/* Start Service Section */}
      <Spacing lg="150" md="80" />
      <Div id="service">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="4 Departments to achieve that project"
                subtitle="Our Team Departments"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Information Technology"
                    link="https://benrover-24.github.io/docs/it"
                    src="/images/Departments/IT.png"
                    alt="IT Department"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Electronic"
                    link="https://benrover-24.github.io/docs/electronics"
                    src="/images/Departments/Electronic.png"
                    alt="Electronic Department"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Mechanic"
                    link="https://benrover-24.github.io/docs/mechanics"
                    src="/images/Departments/Mechanic.png"
                    alt="Mechanic Department"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Space science"
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
                title="Thanks for your support..."
                subtitle="Our Sponsors"
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
          title="You can support<br /> <i>BenRover</i> by donating !"
          btnText="Donate"
          btnLink="/contact"
          bgSrc="/images/cta_bg.png"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
