import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SocialWidget from '../Widget/SocialWidget';
import './header.scss';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import SponsorButton from '../SponsorButton';
import Div from '../Div';
import { Image } from 'react-bootstrap';

const navItems = [
  { to: '/', label: 'Accueil' },
  { to: '/team', label: 'Notre équipe' },
  { to: '/competitions', label: 'Compétitions' },
  { to: '/rovers', label: 'Rovers' },
  { to: '/partners', label: 'Partenaires' },
  { to: '/gallery', label: 'Galerie' },
];

export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${
          variant ? variant : ''
        } cs-sticky_header ${isSticky ? 'cs-sticky_header_active' : ''}`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in">
              <Div className="cs-main_header_left">
                <NavLink className="cs-site_branding" to="/">

                <Image 
                src="/images/logo.png"
                alt="Logo"
                height="100%"
                fluid
                />
                  {/*<img src="/images/logo.png" alt="BenRover - Tekbot Robotics" style={{height: '100%', objectFit: 'cover'}}/>*/}
                </NavLink>
              </Div>
              <Div className="cs-main_header_center">
                <Div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className="cs-nav_list"
                    style={{ display: `${mobileToggle ? 'block' : 'none'}` }}
                  >
                    {navItems.map((item, index) => (
        <li key={index}>
          {/*<a href={item.to} onClick={() => setMobileToggle(false)} class="active">{item.label}</a>*/}
          <NavLink
        to={item.to}
        onClick={() => setMobileToggle(false)}
        className='active text-capitalize'
        >
          {item.label}
        </NavLink>
        </li>
      ))}
                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs-toggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </Div>
              </Div>
              <Div className="cs-main_header_right">
                <Div className="cs-toolbox">
                  {/*<span
                    className="cs-icon_btn"
                    onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
                  >
                    <span className="cs-icon_btn_in">
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                  </span>*/}
                  <SponsorButton />
                </Div>
                
              </Div>
            </Div>
          </Div>
        </Div>
      </header>

      {/*<Div
        className={
          sideHeaderToggle ? 'cs-side_header active' : 'cs-side_header'
        }
      >
        <button
          className="cs-close"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div
          className="cs-side_header_overlay"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        {/*<Div className="cs-side_header_in">
          <Div className="cs-side_header_box">
            <ContactInfoWidget title="Contactez-nous" withIcon />
          </Div>
          <Div className="cs-side_header_box">
            <SocialWidget />
          </Div>
        </Div>
      </Div>*/}
    </>
  );
}
