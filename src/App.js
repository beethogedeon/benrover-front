import { Route, Routes } from 'react-router-dom';
import AboutPage from './components/Pages/AboutPage';
import DonationPage from './components/Pages/DonationPage';
import ErrorPage from './components/Pages/ErrorPage';
import Home from './components/Pages/Home';
import TeamPage from './components/Pages/TeamPage';
import TeamDetails from './components/Pages/TeamDetails';
import Layout from './components/Layout';
import FaqPage from './components/Pages/FaqPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="donation" element={<DonationPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="team/:teamDetails" element={<TeamDetails />} />
          <Route path="faq" element={<FaqPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
