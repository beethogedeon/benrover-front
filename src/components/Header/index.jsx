import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.scss';
import SponsorButton from '../SponsorButton';
import Div from '../Div';
import { Image } from 'react-bootstrap';

const navItems = [
  { to: '/', label: 'Accueil' },
  { to: '/team', label: 'Notre équipe' },
  { to: '/competitions', label: 'Compétitions' },
  { to: '/#', label: 'Rovers' },
  { to: '/partners', label: 'Partenaires' },
  { to: '/gallery', label: 'Galerie' },
];

export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`cs-site_header cs-style1 text-uppercase ${
        variant || ''
      } cs-sticky_header ${isSticky ? 'cs-sticky_header_active' : ''}`}
    >
      <Div className="cs-main_header">
        <Div className="container">
          <Div className="cs-main_header_in">
            <Div className="cs-main_header_left d-flex justify-content-center justify-content-md-start">
              <Link className="cs-site_branding" to="/">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  className="img-fluid"
                  style={{ maxHeight: '60px', width: 'auto' }}
                />
              </Link>
            </Div>
            <Div className="cs-main_header_center">
              <Div className="cs-nav cs-primary_font cs-medium">
                <ul
                  className={`cs-nav_list ${mobileToggle ? 'd-block' : 'd-none d-md-flex'}`}
                >
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <NavLink
                        to={item.to}
                        onClick={() => setMobileToggle(false)}
                        className="active text-capitalize"
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <span
                  className={`cs-munu_toggle d-md-none ${mobileToggle ? 'cs-toggle_active' : ''}`}
                  onClick={() => setMobileToggle(!mobileToggle)}
                >
                  <span></span>
                </span>
              </Div>
            </Div>
            <Div className="cs-main_header_right">
              <Div className="cs-toolbox">
                <SponsorButton />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
    </header>
  );
}
