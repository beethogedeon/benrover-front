// src/RoverFeatureSection.js
import React, { useState, useEffect } from 'react';
import Rover3D from './Rover3DViewer';
import "./RoverInfo.css";

const features = [
  { title: 'Feature 1', description: 'Description of Feature 1' },
  { title: 'Feature 2', description: 'Description of Feature 2' },
  // Add more features as needed
];

const specifications = [
  { spec: 'Specification 1', value: 'Value of Specification 1' },
  { spec: 'Specification 2', value: 'Value of Specification 2' },
  // Add more specifications as needed
];

const RoverInfo = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="container-fluid rover-feature-section">
      <div className="row">
        <div className={`col-md-6`}>
          <div className="rover-3d">
            <Rover3D />
          </div>
        </div>
        <div className={`col-md-6`}>
          {isMobile ? (
            <div>
              <button
                className={`btn btn-primary toggle-button ${activeTab === 'features' ? 'active' : ''}`}
                onClick={() => setActiveTab('features')}
              >
                Fonctionnalités
              </button>
              <button
                className={`btn btn-primary toggle-button ${activeTab === 'specifications' ? 'active' : ''}`}
                onClick={() => setActiveTab('specifications')}
              >
                Spécifications
              </button>
              <div className={`tab-content ${activeTab === 'features' ? 'active' : ''}`}>
                <h2>Fonctionnalités</h2>
                <ul>
                  {features.map((feature, index) => (
                    <li key={index}>
                      <strong>{feature.title}: </strong> {feature.description}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`tab-content ${activeTab === 'specifications' ? 'active' : ''}`}>
                <h2>Spécifications</h2>
                <ul>
                  {specifications.map((spec, index) => (
                    <li key={index}>
                      <strong>{spec.spec}: </strong> {spec.value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="tabs">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeTab === 'features' ? 'active' : ''}`}
                    href="#"
                    onClick={(e) => { e.preventDefault(); setActiveTab('features'); }}
                  >
                    Fonctionnalités
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeTab === 'specifications' ? 'active' : ''}`}
                    href="#"
                    onClick={(e) => { e.preventDefault(); setActiveTab('specifications'); }}
                  >
                    Spécifications
                  </a>
                </li>
              </ul>
              <div className={`tab-content mt-3 ${activeTab === 'features' ? 'active' : ''}`}>
                <h2>Fonctionnalités</h2>
                <ul>
                  {features.map((feature, index) => (
                    <li key={index}>
                      <strong>{feature.title}:</strong> {feature.description}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`tab-content mt-3 ${activeTab === 'specifications' ? 'active' : ''}`}>
                <h2>Spécifications</h2>
                <ul>
                  {specifications.map((spec, index) => (
                    <li key={index}>
                      <strong>{spec.spec}:</strong> {spec.value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoverInfo;
