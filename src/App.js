import React, {lazy, Suspense} from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from './components/Loading';
import Layout from './components/Layout';

const Home = lazy(() => import('./Pages/Home'));
const AboutPage = lazy(() => import('./Pages/AboutPage'));
const DonationPage = lazy(() => import('./Pages/DonationPage'));
const ErrorPage = lazy(() => import('./Pages/ErrorPage'));
const TeamPage = lazy(() => import('./Pages/TeamPage'));
const GalleryPage = lazy(() => import('./Pages/GalleryPage'));
const CompetitionsPage = lazy(() => import('./Pages/CompetitionsPage'));
const PartnersPage = lazy(() => import('./Pages/PartnersPage'));
const FaqPage = lazy(() => import('./Pages/FaqPage'));
const RoverPage = lazy(() => import('./Pages/RoverPage'));


function App() {
  return (
    <>
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="donation" element={<DonationPage />} />
          <Route path="rover" element={<RoverPage />} />
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
