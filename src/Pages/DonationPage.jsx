import React, { useState, useEffect } from 'react';
import { pageTitle } from '../helper';
import Div from '../components/Div';
import SectionHeading from '../components/SectionHeading';
import Spacing from '../components/Spacing';
import NotifModal from '../components/Modal';
import './DonationPage.css';

import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

const currencySigns = {
  XOF: 'FCFA',
  USD: '$',
  EUR: '€'
};

const ProgressBar = ({ current, target }) => {
  const percentage = Math.min((current / target) * 100, 100);
  return (
    <div className="progress-bar-container" style={{ width: '100%', backgroundColor: '#e0e0e0', borderRadius: '10px', overflow: 'hidden' }}>
      <div 
        className="progress-bar striped" 
        style={{ 
          width: `${percentage}%`, 
          height: '20px', 
          backgroundColor: '#c66948', 
          transition: 'width 0.5s ease-in-out' 
        }}
      />
    </div>
  );
};

export default function DonationPage() {

  const [activeTab, setActiveTab] = useState('africa');

  const [targetAmount, setTargetAmount] = useState({
    XOF: 0,
    USD: 0,
    EUR: 0
  });
  const [currentAmount, setCurrentAmount] = useState({
    XOF: 0,
    USD: 0,
    EUR: 0
  });

  const docRef = doc(db, process.env.REACT_APP_COLLECTION_NAME, process.env.REACT_APP_DOCUMENT_ID);

  useEffect(() => {
    const fetchCrowdfundingData = async () => {
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()!=null) {
        const data = docSnap.data();
        setCurrentAmount({
          XOF: data.xof || 0,
          USD: data.usd || 0,
          EUR: data.eur || 0
        });
        // You might want to set target amounts here as well if they're stored in Firebase
        setTargetAmount({
          XOF: 3000000, // Example target amount
          USD: 5000,    // Example target amount
          EUR: 4500     // Example target amount
        });
      }
    };
  
    fetchCrowdfundingData();
  }, []);
  
  pageTitle('Soutenir le projet');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  useEffect(() => {
    const loadScript = async () => {
      try {
        await import('https://cdn.fedapay.com/checkout.js?v=1.1.7');
        //setScriptLoaded(true);
      } catch (error) {
        //console.error('Failed to load script:', error);
      }
    };

    loadScript();
  }, []);

  

  const [locale, setLocale] = useState('');

  useEffect(() => {
    const userLocale = navigator.language || navigator.userLanguage;
    setLocale(userLocale);
  }, []);

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    amount: '1000',
    currency: 'XOF', // default to USD
    paymentType: 'Paiements mobiles'
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    // Fetch user location and set currency
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        if (data.currency) {
          setFormData(prevState => ({
            ...prevState,
            currency: data.currency
          }));
        }
      })
      .catch(error => console.error('Error fetching user location:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    const FedaPay = window['FedaPay'];
    e.preventDefault();
    let widget = FedaPay.init({
      public_key: process.env.REACT_APP_FEDAPAY_KEY,
      environment: 'live',
      locale: locale,
      transaction: {
        amount: formData['amount'],
        description: 'Donation for BenRover'
      },
      customer: {
        email: formData['email'],
        lastname: formData['lastname'],
        firstname: formData['firstname'],
      },
      currency: {
        iso: formData['currency'],
      },
      onComplete: async (resp) => {
        if (resp.reason === FedaPay.DIALOG_DISMISSED) {
          setModalMessage('Vous avez annulé votre don !');
          setIsModalOpen(true);
          setTimeout(() => setIsModalOpen(false), 3000);
        } else {
          // Update Firebase
          const response = await fetch(process.env.REACT_APP_BACK+"/thank-mail?email="+formData["email"], {
            method: "POST",
            headers: {
              "X-API-Key": process.env.REACT_APP_BACKKEY,
              "Content-Type": "application/json"
            },
          });
          const amount = parseFloat(formData.amount);
          const currency = formData.currency.toLowerCase();
          
          const data = {
            [currency]: currentAmount[currency.toUpperCase()] + amount
          }

          await updateDoc(docRef, data);
  
          // Update local state
          setCurrentAmount(prevAmount => ({
            ...prevAmount,
            [currency.toUpperCase()]: prevAmount[currency.toUpperCase()] + amount
          }));
          setModalMessage('Don reçu ! Infiniment Merci !');
          setIsModalOpen(true);
          setTimeout(() => setIsModalOpen(false), 2000);
        }
      }
    });
  
    widget.open();
  };

  return (
    <>
      <Spacing lg="150" md="80" />

      <Div className="container">
      <Div className="fundraising-progress" style={{ padding: '50px', background: 'linear-gradient(267.18deg, #161616 0%, #080808 100%)', borderRadius:'15px'}}>
    <h3 className="cs-secondary_color">Objectif de collecte de fonds</h3>
    <Spacing lg="20" md="10" />
    <ProgressBar current={currentAmount.XOF} target={targetAmount.XOF}/>
    <Spacing lg="20" md="10" />
    <Div className="progress-stats" style={{ display: 'flex', justifyContent: 'space-between' }}>
      <p className="cs-primary_color">
        Collecté: <strong>{currentAmount.XOF.toLocaleString()} XOF</strong>
      </p>
      <p className="cs-primary_color">
        Objectif: <strong>{targetAmount.XOF.toLocaleString()} XOF</strong>
      </p>
    </Div>
  </Div>
  <Spacing lg="60" md="40" />
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title="Votre contribution est nécessaire pour faire briller le Bénin sur la scène internationale..."
              subtitle="Participer au projet BenRover-24"
            />
            <Spacing lg="55" md="30" />
            <Spacing lg="0" md="50" />
          </Div>
          <div className="col-lg-6">
          <div>
            <ul className="nav nav-pills nav-justified mb-3" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link h3 ${activeTab === 'africa' ? 'active' : ''}`}
              onClick={() => setActiveTab('africa')}
              role="tab"
              aria-controls="africa"
              aria-selected={activeTab === 'africa'}
            >
              Depuis l'Afrique
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link h3 ${activeTab === 'world' ? 'active' : ''}`}
              onClick={() => setActiveTab('world')}
              role="tab"
              aria-controls="world"
              aria-selected={activeTab === 'world'}
            >
              Hors de l'Afrique
            </button>
          </li>
        </ul>

        <div className="tab-content">
          <div
            className={`tab-pane fade ${activeTab === 'africa' ? 'show active' : ''}`}
            id="africa"
            role="tabpanel"
          >
            {/*<h3 className='text-center'>Fonctionnalités</h3>*/}
            <form onSubmit={handleSubmit} className="row">
        <Div className="col-sm-6">
          <label className="cs-primary_color">Prénoms*</label>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            className="cs-form_field"
            required
          />
          <Div className="spacing" style={{ margin: '20px 0' }}></Div>
        </Div>
        <Div className="col-sm-6">
          <label className="cs-primary_color">Nom de famille*</label>
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            className="cs-form_field"
            required
          />
          <Div className="spacing" style={{ margin: '20px 0' }}></Div>
        </Div>
        <Div className="col-sm-12">
          <label className="cs-primary_color">Adresse mail*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="cs-form_field"
            required
          />
          <Div className="spacing" style={{ margin: '20px 0' }}></Div>
        </Div>
        <Div className="col-sm-12">
          <label className="cs-primary_color">Montant*</label>
          <input
            type="number"
            name="amount"
            step={500}
            value={formData.amount}
            onChange={handleChange}
            className="cs-form_field"
            min={500}
            required
          />
          <Div className="spacing" style={{ margin: '20px 0' }}></Div>
        </Div>
        <Div className="col-sm-12">
          <button className="cs-btn cs-style1">
          <span>Faire un don {formData['amount'] !== '' ? `de ${formData['amount']} FCFA` : ''}</span>
          </button>
        </Div>
      </form>
          </div>
          <div
            className={`tab-pane fade ${activeTab === 'world' ? 'show active' : ''}`}
            id="world"
            role="tabpanel"
          >
            <p>
          Nous vous prions de bien vouloir suivre la procédure suivante : <br /><br />
          <ul>
            <li>
              Télécharger l'application TapTap Send disponible sur AppStore et PlayStore.
            </li>
            <li>
              Effectuer le transfert sur le +229 96 24 94 94 (Mohamed SALIFOU)
            </li>
          </ul>
        </p>
          </div>
        </div>
          </div>
        </div>
          {/*<Div className="col-lg-6 container">
          <Tabs className='row' id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)}>
          <Tab eventKey="africa" title="Depuis l'Afrique">
      <form onSubmit={handleSubmit} className="row">
        <Div className="col-sm-6">
          <label className="cs-primary_color">Prénoms*</label>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            className="cs-form_field"
            required
          />
          <Div className="spacing" style={{ margin: '20px 0' }}></Div>
        </Div>
        <Div className="col-sm-6">
          <label className="cs-primary_color">Nom de famille*</label>
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            className="cs-form_field"
            required
          />
          <Div className="spacing" style={{ margin: '20px 0' }}></Div>
        </Div>
        <Div className="col-sm-12">
          <label className="cs-primary_color">Adresse mail*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="cs-form_field"
            required
          />
          <Div className="spacing" style={{ margin: '20px 0' }}></Div>
        </Div>
        <Div className="col-sm-12">
          <label className="cs-primary_color">Montant*</label>
          <input
            type="number"
            name="amount"
            step={500}
            value={formData.amount}
            onChange={handleChange}
            className="cs-form_field"
            min={500}
            required
          />
          <Div className="spacing" style={{ margin: '20px 0' }}></Div>
        </Div>
        <Div className="col-sm-12">
          <button className="cs-btn cs-style1">
          <span>Faire un don {formData['amount'] !== '' ? `de ${formData['amount']} FCFA` : ''}</span>
          </button>
        </Div>
      </form>
      </Tab>
      <Tab eventKey="world" title="Hors de l'Afrique">
        <p>
          Nous vous prions de bien vouloir suivre la procédure suivante : <br /><br />
          <ul>
            <li>
              Télécharger l'application TapTap Send disponible sur AppStore et PlayStore
            </li>
          </ul>
        </p>
      </Tab>  
      
    </Tabs>
    </Div>*/}
    <NotifModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        message={modalMessage}
      />
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
    </>
  );
}
