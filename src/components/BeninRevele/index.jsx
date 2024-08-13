import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './BeninRevele.css';

const BeninRevele = () => {
  return (
    <Container className="bg-dark">
      <Row className="align-items-center">
        <Col>
          <div className="container">
            <img src="images/from-benin-to-world.png" alt="BeninRevele" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BeninRevele;