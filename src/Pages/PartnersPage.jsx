import React, { useEffect, useState } from 'react';
import { pageTitle } from '../helper';
import { Col, Row } from 'react-bootstrap';
import Cta from '../components/Cta';
import PageHeading from '../components/PageHeading';
import Div from '../components/Div';
import Spacing from '../components/Spacing';
import Partners from '../components/Partners';
import { Modal, Button, Form } from "react-bootstrap";
const partners = [
  {
    name: "SCOP",
    logo: "images/scop.png",
    description: "Sèmè City Open Park est une cité de l'innovation et du savoir au Bénin, offrant des ressources et un espace de travail pour les projets innovants comme le nôtre."
  },
  {
    name: "Sirius Space Association",
    logo: "images/sirius.png",
    description: "La section sud-africaine de Sirius Space Association promeut l'innovation technologique et l'excellence en ingénierie."
  },
  {
    name: "byHapi",
    logo: "images/hapi.png",
    description: "byHapi est un atelier d'impression 3D qui joue un rôle clé dans notre projet en nous fournissant un soutien technique de pointe pour l'impression des composants essentiels de notre rover."
  },
];

export default function PartnersPage() {
    pageTitle('Nos Partenaires');
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  // Modal visibility state
  const [show, setShow] = useState(false);

  // Form input states
  const [companyName, setCompanyName] = useState("");
  const [partnershipType, setPartnershipType] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  // Submission status (success or error)
  const [submissionStatus, setSubmissionStatus] = useState(null);

  // Modal toggle functions
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create data object to send
    const formData = {
      "company_name": companyName,
      "partnership_type": partnershipType,
      email,
      description,
    };

    try {
      // Make API call using fetch (you can replace the URL with your actual API endpoint)
      const response = await fetch(process.env.REACT_APP_BACK+"/partnership-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Reset form fields and set success message
        setCompanyName("");
        setPartnershipType("");
        setEmail("");
        setDescription("");
        setSubmissionStatus("success");
      } else {
        // Handle server errors
        setSubmissionStatus("error");
      }
    } catch (error) {
      // Handle network errors
      setSubmissionStatus("error");
    }

    handleClose(); // Close the modal after submission
  };
  
    return (
      <>
        <PageHeading
          title="Nos Partenaires"
          bgSrc="images/team-hero-bg.webp"
          pageLinkText="Partners"
          subText="Merci pour votre soutien."
        />
        <Div className="container my-5">
          <Row xs={1} md={2} lg={3} className="g-4">
                  {partners.map((partner, index) => (
                    <Col key={index}>
                      <Partners partner={partner} />
                    </Col>
                  ))}
                </Row>
                <Row className="mt-5">
                  <Col>
                    <h2 className="text-center mb-4">Pourquoi devenir partenaire ?</h2>
                    <p className="text-center">
                      Rejoignez-nous dans notre mission de promouvoir l'innovation technologique et l'éducation STEM en Afrique. 
                      En devenant partenaire du Défi African Rover Challenge, vous soutenez la prochaine génération d'ingénieurs et de scientifiques, 
                      tout en gagnant une visibilité auprès d'un public passionné de technologie et d'exploration spatiale.
                    </p>
                    <div className="text-center mt-4">
                      <button className="btn btn-primary btn-lg" onClick={handleShow}>Devenir Partenaire</button>
                    </div>
                  </Col>
                </Row>
        </Div>
        

        <Div className="container">
          <Spacing lg="90" md="45" />
          <Div className="container" id="sponsor">
          <Cta
            title="Vous pouvez soutenir<br /> notre projet en faisant un simple geste !"
            btnText="Faire un don"
            btnLink="/donation"
            bgSrc="/images/cta_bg.png"
          />
        </Div>
        </Div>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header  closeButton>
          <Modal.Title className='text-dark'>Formulaire de partenariat</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
        <Modal.Body >
            <Form.Group controlId="companyName">
              <Form.Label>Nom de l'entreprise</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez le nom de votre entreprise"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="partnershipType">
              <Form.Label>Type de partenariat</Form.Label>
              <Form.Control
                as="select"
                value={partnershipType}
                onChange={(e) => setPartnershipType(e.target.value)}
                required
              >
                <option value="">Sélectionnez...</option>
                <option>Partenariat financier</option>
                <option>Partenariat technique</option>
                <option>Partenariat stratégique</option>
              </Form.Control>

            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email de contact</Form.Label>
              <Form.Control
                type="email"
                placeholder="Entrez votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Courte description du partenariat"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center align-items-center">
          <Div >
              <Button variant="primary" type="submit">
              Soumettre
              </Button>
          </Div>
        </Modal.Footer></Form>
      </Modal>
      </>
    );
  }
  