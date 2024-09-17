import React, { useEffect, useState } from 'react';
import { pageTitle } from '../helper';
import Cta from '../components/Cta';
import PageHeading from '../components/PageHeading';
import SectionHeading from '../components/SectionHeading';
import Div from '../components/Div';
import Spacing from '../components/Spacing';
//import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
//import { Document, Page } from 'react-pdf';
//import { pdfjs } from 'react-pdf';

const RoverFeatSpecs = React.lazy(() => import('../components/RoverSpecs'));

export default function RoverPage() {
    pageTitle('Notre Rover');
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return (
      <>
        <PageHeading
          title="Le Rover"
          bgSrc="images/head_back_rov.webp"
          pageLinkText="Rover"
          subText=""
        />
<Spacing lg="90" md="45" />
        <Div className="container" id="specs">
          <SectionHeading
            title="Fonctionnalités et Spéfications"
            subtitle=""
            variant="cs-style1 text-center"
          />
          
        </Div>
        <RoverFeatSpecs/>

        <Spacing lg="90" md="45" />

        {/*<SectionHeading
            title="BenRover - Presentation"
            subtitle=""
            variant="cs-style1 text-center"
          />
      <PDFViewer pdfUrl="./BENROVER_PRESENTATION_14_09_2024.pdf" />
      <Document file="./BENROVER_PRESENTATION_14_09_2024.pdf" />
      <Document file="./BENROVER_PRESENTATION_14_09_2024.pdf">
                <Page pageNumber={1} />
      </Document>*/}
        

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
  