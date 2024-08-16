import React from 'react';
import { Card } from 'react-bootstrap';

const Partners = ({ partner }) => (
  <Card className="h-100 shadow-sm bg-dark text-white">
    <Card.Body className="d-flex flex-column">
      <div className="text-center mb-3">
        <img src={partner.logo} alt={`Logo ${partner.name}`} className="img-fluid" style={{ maxHeight: '100px' }} />
      </div>
      {/*<Card.Title className="text-center">{partner.name}</Card.Title>*/}
      <Card.Text className="flex-grow-1">{partner.description}</Card.Text>
    </Card.Body>
  </Card>
);

export default Partners;