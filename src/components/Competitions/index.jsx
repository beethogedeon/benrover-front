import React from "react";
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';
import Spacing from "../Spacing";
import Button from "../Button";

const Competitions = () => {
  
    return (
        <Container className="my-5">
        <Row className="mb-4">
          <Col>
            <h2 className="text-center mb-4">African Rover Challenge : Qu'est-ce que c'est ?</h2>
            <p className="text-center">
              Il s'agit d'une compétition passionnante qui invite les étudiants à concevoir et construire un prototype de rover martien. Ce défi vise à stimuler l'innovation, la créativité et l'intérêt pour les technologies spatiales parmi les jeunes africains. Bien que le prototype ne soit pas destiné à fonctionner dans les conditions réelles de l'espace ou de Mars, il doit être un petit robot mobile, contrôlé sans fil et doté d'une source d'alimentation indépendante.
            </p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6}>
            <Card className="bg-dark text-light" style={{height: '300px'}}>
              <Card.Header as="h3" className="text-center">Qui peut participer ?</Card.Header>
              <Card.Body>
                <ul>
                  <li>Étudiants activement inscrits dans des lycées, collèges ou universités pendant toute la durée de la compétition</li>
                  <li>Participation en équipe obligatoire</li>
                  <li>Possibilité de consulter des professeurs, experts ou ingénieurs (appelés Conseillers de Faculté) pour obtenir des conseils et des orientations</li>
                  <li>Chaque équipe doit désigner un seul chef d'équipe (également étudiant)</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="bg-dark text-light" style={{height: '300px'}}>
              <Card.Header as="h3" className="text-center">Quels sont les objectifs ?</Card.Header>
              <Card.Body>
                <ul>
                  <li>Concevoir un robot mobile contrôlé sans fil</li>
                  <li>Développer une source d'alimentation indépendante (batterie)</li>
                  <li>Relever des défis techniques inspirés des missions martiennes</li>
                  <li>Favoriser l'apprentissage multidisciplinaire en ingénierie</li>
                  <li>Stimuler l'innovation dans la recherche et les affaires</li>
                  <li>Populariser les avancées en STEM (Science, Technologie, Ingénierie et Mathématiques)</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Spacing lg="90" md="45" />
        <Row className="mb-4">
          <Col>
            <h2 className="text-center mb-3">Étapes de la compétition</h2>
            <Spacing lg="30" md="15" />
            <Accordion className="text-light" >
              <Accordion.Item eventKey="0">
                <Accordion.Header>Étape de Lancement</Accordion.Header>
                <Accordion.Body>
                  <p>Cette étape se déroule en ligne. Les étudiants conçoivent et construisent leurs robots chez eux, dans leurs écoles ou universités. Ils doivent présenter :</p>
                  <ul>
                    <li>Leur stratégie de projet</li>
                    <li>Leur conception</li>
                    <li>Les capacités de leur rover fabriqué</li>
                    <li>Leurs connaissances en géologie martienne et en astrobiologie</li>
                  </ul>
                  <p>Les équipes soumettent des rapports écrits et une vidéo du rover. Cette étape comprend une finale en ligne avec des présentations et des conférences d'intervenants de l'industrie robotique et spatiale.</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Étape Mars</Accordion.Header>
                <Accordion.Body>
                  <p>Les meilleures équipes de l'Étape de Lancement sont invitées à participer à l'Étape Mars. Cette phase permet aux équipes de se rencontrer en personne avec leurs rovers sur un parcours d'obstacles spécialement préparé. Les équipes doivent :</p>
                  <ul>
                    <li>Opérer leurs rovers sans fil</li>
                    <li>Accomplir une série de tâches sur le parcours d'obstacles</li>
                    <li>Simuler des scénarios réalistes de futures missions sur Mars</li>
                  </ul>
                  <p>Les tâches peuvent inclure l'exploration de terrains rocheux ou le transport de médicaments à un astronaute dans le besoin. Les meilleures équipes de cette étape seront récompensées.</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>

        <Spacing lg="90" md="45" />

        <Row className="mb-4">
          <Col>
            <h2 className="text-center mb-3">Calendrier 2024</h2>
            <Spacing lg="30" md="15" />
            <table className="table table-striped table-bordered table-sm table-dark text-light">
              <thead>
                <tr>
                  <th className="fw-bold">Événement</th>
                  <th className="fw-bold">Date limite</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Inscription des équipes</td>
                  <td>15 mars 2024</td>
                </tr>
                <tr>
                  <td>Rapport de stratégie de projet</td>
                  <td>12 mai 2024</td>
                </tr>
                <tr>
                  <td>Rapport de conception final</td>
                  <td>11 août 2024</td>
                </tr>
                <tr>
                  <td>Vidéo</td>
                  <td>07 septembre 2024</td>
                </tr>
                <tr>
                  <td>Finale du Launch Stage</td>
                  <td>14 septembre 2024</td>
                </tr>
                <tr>
                  <td>Qualification pour l'étape Mars</td>
                  <td>15 septembre 2024</td>
                </tr>
                <tr>
                  <td>Étape Mars</td>
                  <td>26 octobre 2024</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
        <Spacing lg="90" md="45" />
        <Row className="mb-4">
          <Col>
            <h2 className="text-center mb-3">Équipe BenRover</h2>
            <Spacing lg="30" md="15" />
            <Card className="bg-dark text-light text-justify">
              <Card.Body>
                <p>
                  Notre équipe, BenRover, est un collectif diversifié d'étudiants de la République du Bénin. Nous sommes unis par un objectif commun : nous développer en tant qu'ingénieurs et créateurs. Notre équipe est structurée en cinq groupes clés :
                </p>
                <ul>
                  <li><strong>Équipe d'ingénierie mécanique</strong> : Dirigée par Arcady, responsable de la conception et de la fabrication des composants physiques du rover.</li>
                  <li><strong>Équipe d'ingénierie électrique</strong> : Sous la direction de Haby et Judicaël, gère les systèmes électriques essentiels au fonctionnement du rover.</li>
                  <li><strong>Équipe informatique</strong> : Dirigée par Elfried, développe les solutions logicielles nécessaires au fonctionnement et au contrôle du rover.</li>
                  <li><strong>Équipe des sciences spatiales</strong> : Guidée par Prudence, apporte des connaissances cruciales sur les défis inhérents aux missions de compétition.</li>
                  <li><strong>Équipe des opérations et de la gestion de projet</strong> : Dirigée par Mohamed, assure une gestion de projet et une efficacité opérationnelle sans faille.</li>
                </ul>
                <p>
                  Nous utilisons diverses ressources, dont les installations du "Sèmè City Open Park", pour développer notre rover innovant. Notre méthodologie de gestion de projet comprend des réunions régulières, des outils de gestion des tâches et un suivi continu des progrès.
                </p><br />
                <Row className="text-center">
          <Col>
          <Button 
              btnLink="/team"
              btnText="En savoir plus sur l'équipe BenRover"
            />
          </Col>
          
        </Row>
                
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Spacing lg="90" md="45" />
        <Row className="mb-4">
          <Col>
            <h2 className="text-center mb-3">Conception initiale du rover BenRover</h2>
            <Spacing lg="30" md="15" />
            <Card className="bg-dark text-light">
              <Card.Body>
                <h4>Conception mécanique :</h4>
                <ul>
                  <li>Structure cubique simple pour le châssis, construite en profilé d'aluminium</li>
                  <li>Système de suspension rocker-bogie pour une stabilité exceptionnelle</li>
                  <li>Six roues, chacune alimentée par un moteur DC</li>
                  <li>Moteurs servo pour la direction omnidirectionnelle des roues avant et arrière</li>
                  <li>Composants principalement imprimés en 3D avec des thermoplastiques PLA et TPU</li>
                </ul>
                <h4>Conception électrique et informatique :</h4>
                <ul>
                  <li>Plateforme NVIDIA Jetson NANO pour le traitement des données d'entrée</li>
                  <li>Raspberry Pi 4 comme ordinateur central, exécutant un cadre logiciel ROS</li>
                  <li>Arduino Mega pour contrôler divers dispositifs de sortie</li>
                  <li>Système de gestion de l'énergie pour optimiser l'efficacité énergétique</li>
                  <li>Logiciel personnalisé en C++ pour l'intégration des fonctionnalités</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
            <Button 
              btnLink="https://www.cars4mars.co.za"
              target="_blank"
              btnText="En savoir plus sur Cars4Mars"
            />
          </Col>
        </Row>
      </Container>
    );
}

export default Competitions;
