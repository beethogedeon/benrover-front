import React, { useEffect } from 'react';
import { pageTitle } from '../helper';
import Div from '../components/Div';

import SectionHeading from '../components/SectionHeading';

export default function ErrorPage() {
  pageTitle('Page Introuvable');
  return (
    <Div
      className="cs-page_heading cs-style1 cs-center text-center cs-bg cs-error_page"
      style={{ backgroundImage: 'url("/images/about_hero_bg.jpeg")' }}
    >
      <Div className="container">
        <SectionHeading
          title="Page Introuvable"
          subtitle="Erreur 404"
          btnText="Retour à l'accueil"
          btnLink="/"
          variant="cs-style1 text-center"
        />
      </Div>
    </Div>
  );
}
