import React, { useEffect } from 'react';
import { pageTitle } from '../helper';
import { Col, Row } from 'react-bootstrap';
import Cta from '../components/Cta';
import PageHeading from '../components/PageHeading';
import Div from '../components/Div';
import Spacing from '../components/Spacing';
import Partners from '../components/Partners';

const partners = [
  {
    name: "SCOP",
    logo: "images/scop.png",
    description: "Sèmè City Open Park est une cité de l'innovation et du savoir au Bénin, offrant des ressources et un espace de travail pour les projets innovants comme le nôtre."
  },
  {
    name: "Sirius Space Association",
    logo: "images/sirius.png",
    description: "La section sud-africaine de Sirius Space Association promeut l'innovation technologique et l'excellence en ingénierie."
  },
  
];

export default function PartnersPage() {
    pageTitle('Nos Partenaires');
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return (
      <>
        <PageHeading
          title="Nos Partenaires"
          bgSrc="images/team-hero-bg.webp"
          pageLinkText="Partners"
          subText="Merci pour votre soutien."
        />
        <Div className="container my-5">
          <Row xs={1} md={2} lg={3} className="g-4">
                  {partners.map((partner, index) => (
                    <Col key={index}>
                      <Partners partner={partner} />
                    </Col>
                  ))}
                </Row>
                <Row className="mt-5">
                  <Col>
                    <h2 className="text-center mb-4">Pourquoi devenir partenaire ?</h2>
                    <p className="text-center">
                      Rejoignez-nous dans notre mission de promouvoir l'innovation technologique et l'éducation STEM en Afrique. 
                      En devenant partenaire du Défi African Rover Challenge, vous soutenez la prochaine génération d'ingénieurs et de scientifiques, 
                      tout en gagnant une visibilité auprès d'un public passionné de technologie et d'exploration spatiale.
                    </p>
                    <div className="text-center mt-4">
                      <button className="btn btn-primary btn-lg">Devenir Partenaire</button>
                    </div>
                  </Col>
                </Row>
        </Div>
        

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
      </>
    );
  }
  