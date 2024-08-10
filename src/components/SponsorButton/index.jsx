import React from 'react';
import { Button } from 'react-bootstrap';
import { PiMoneyWavyFill } from "react-icons/pi";
import { NavLink } from 'react-router-dom';
import './sponsor.css';

const SponsorButton = () => {
  return (
    <NavLink to="/donation" className="buttonWrapper">
      <button className="glowButton">
        <span className="buttonContent">
          <PiMoneyWavyFill className="icon" />
          <span>Soutenir le projet</span>
        </span>
      </button>
    </NavLink>
  );
};

export default SponsorButton;