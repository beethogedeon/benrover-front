import { Icon } from '@iconify/react';
import React, { useState, useEffect } from 'react';
import { pageTitle } from '../../helper';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import NotifModal from '../Modal';

const currencySigns = {
  XOF: 'FCFA',
  USD: '$',
  EUR: '€'
};

export default function DonationPage() {
  pageTitle('Support Us');
  useEffect(() => {
    window.scrollTo(0, 0);
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
    amount: '',
    currency: 'XOF', // default to USD
    paymentType: 'Mobile payments'
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
      onComplete(resp) {
        
        if (resp.reason === FedaPay.DIALOG_DISMISSED) {
          setModalMessage('You cancel your donation !');
          setIsModalOpen(true);
          setTimeout(() => setIsModalOpen(false), 3000);
        } else {
          setModalMessage('Donation Successful! '+ resp.reason);
          setIsModalOpen(true);
          setTimeout(() => setIsModalOpen(false), 3000);
        }
  
        console.log(resp.transaction);
      }
  });

  widget.open();
  };

  return (
    <>
      {/*<PageHeading
        title="Donation"
        bgSrc="/images/contact_hero_bg.jpeg"
        pageLinkText="Donation"
      />*/}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title="Help us to buy needed materials <br/>and training courses"
              subtitle="Taking part of BenRover project"
            />
            <Spacing lg="55" md="30" />
            {/*<ContactInfoWidget withIcon />*/}
            <Spacing lg="0" md="50" />
          </Div>
          <Div className="col-lg-6">
      <form onSubmit={handleSubmit} className="row">
        <Div className="col-sm-6">
          <label className="cs-primary_color">First Name*</label>
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
          <label className="cs-primary_color">Last Name*</label>
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
          <label className="cs-primary_color">Email*</label>
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
        <Div className="col-sm-6">
          <label className="cs-primary_color">Donation Amount*</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="cs-form_field"
            min={100}
            required
          />
          <Div className="spacing" style={{ margin: '20px 0' }}></Div>
        </Div>
        <Div className="col-sm-6">
          <label className="cs-primary_color">Currency*</label>
          <select
            name="currency"
            value={formData.currency}
            onChange={handleChange}
            className="cs-form_field"
            style={{ backgroundColor: '#181818' }}
            required
          >
            <option value="XOF">FCFA</option>
            <option value="EUR">EUR</option>
          </select>
          <Div className="spacing" style={{ margin: '20px 0' }}></Div>
        </Div>
        {/*<Div className="col-sm-12">
          <label className="cs-primary_color">Payment Type*</label>
          <select
            name="paymentType"
            value={formData.paymentType}
            onChange={handleChange}
            className="cs-form_field"
            style={{ backgroundColor: '#181818'}}
            required
          >
            <option value="Mobile payments">Mobile payments</option>
            <option value="Debit Card">Debit Card</option>
          </select>
          <Div className="spacing" style={{ margin: '20px 0' }}></Div>
        </Div>*/}
        <Div className="col-sm-12">
          <button className="cs-btn cs-style1">
          <span>Donate {formData['amount'] !== '' ? `${formData['amount']} ${currencySigns[formData['currency']]}` : ''}</span>
          </button>
        </Div>
      </form>
      <NotifModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        message={modalMessage}
      />
    </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      {/*<Div className="cs-google_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96652.27317354927!2d-74.33557928194516!3d40.79756494697628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a82f1352d0dd%3A0x81d4f72c4435aab5!2sTroy+Meadows+Wetlands!5e0!3m2!1sen!2sbd!4v1563075599994!5m2!1sen!2sbd"
          allowFullScreen
          title="Google Map"
        />
      </Div>
      <Spacing lg="50" md="40" />*/}
    </>
  );
}
