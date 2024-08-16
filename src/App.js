import React, {lazy, Suspense} from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from './components/Loading';
import Layout from './components/Layout';

const Home = lazy(() => import('./components/Pages/Home'));
const AboutPage = lazy(() => import('./components/Pages/AboutPage'));
const DonationPage = lazy(() => import('./components/Pages/DonationPage'));
const ErrorPage = lazy(() => import('./components/Pages/ErrorPage'));
const TeamPage = lazy(() => import('./components/Pages/TeamPage'));
const GalleryPage = lazy(() => import('./components/Pages/GalleryPage'));
const CompetitionsPage = lazy(() => import('./components/Pages/CompetitionsPage'));
const PartnersPage = lazy(() => import('./components/Pages/PartnersPage'));
const FaqPage = lazy(() => import('./components/Pages/FaqPage'));

function App() {
  return (
    <>
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="donation" element={<DonationPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="competitions" element={<CompetitionsPage />} />
          <Route path="partners" element={<PartnersPage />} />
          <Route path="faq" element={<FaqPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
      
    </>
  );
}

export default App;
/*
function App() {
  return (
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/donation" element={<DonationPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/competitions" element={<CompetitionsPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </Layout>
  );
}

export default App;*/
