import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Button,InputGroup,FormControl, Nav, Image } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Footer.scss"

class Footer extends Component {
    render() {        
    return (
        <footer>
        <Container>
        <Row>
            <Col className="text-center">
                <h5>Réseaux Sociaux</h5>
                <p>Suivez-nous sur nos réseaux sociaux pour vous tenir informé des concerts à venir !</p>
                <Nav className="justify-content-center" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home"><Image src="https://images2.imgbox.com/cb/60/OLTZgTES_o.png" rounded /></Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1"><Image src="https://images2.imgbox.com/22/a8/IVRwecSa_o.png" rounded /></Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2"><Image src="https://images2.imgbox.com/de/e7/047X7LBw_o.png" rounded /></Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled">
      <Image src="https://images2.imgbox.com/63/c3/xxxNBdNB_o.png" rounded />
      </Nav.Link>
    </Nav.Item>
  </Nav>
                {/* insérer les 4 icon des RS */}
            </Col>
            <Col className="text-center">
                <h5>Newsletter</h5>
                <p>Recevez notre newsletter pour ne manquer aucune information.</p>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-sm">Email</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl 
                    aria-label="Small" 
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="name@example.com"
                     />
                     <InputGroup.Append>
                     <Button variant="outline-secondary">Valider</Button>
                     </InputGroup.Append>
                    </InputGroup>
            </Col>
        </Row>
        <Row>
            <Col>
                <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">Programmation</Nav.Link>
                <Nav.Link eventKey="link-1">Tous les évènements</Nav.Link>
                <Nav.Link eventKey="link-2">Aix-en-Provence</Nav.Link>
                <Nav.Link eventKey="link-1">Bourges</Nav.Link>
                <Nav.Link eventKey="link-2">Cannes</Nav.Link>
                <Nav.Link eventKey="link-1">Dunkerque</Nav.Link>
                <Nav.Link eventKey="link-2">Echirolles</Nav.Link>
                <Nav.Link eventKey="link-2">Comment réserver ?</Nav.Link>
                </Nav>
            </Col>
            <Col>
                <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">Restauration</Nav.Link>
                <Nav.Link eventKey="link-1">Présentation</Nav.Link>
                <Nav.Link eventKey="link-2">Réserver</Nav.Link>
                </Nav>
                <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">Parking</Nav.Link>
                <Nav.Link eventKey="link-1">Présentation</Nav.Link>
                <Nav.Link eventKey="link-2">Réserver</Nav.Link>
                </Nav>
            </Col>
            <Col>
                <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">Privatisation</Nav.Link>
                <Nav.Link eventKey="link-1">Présentation</Nav.Link>
                <Nav.Link eventKey="link-2">Réserver</Nav.Link>
                </Nav>
                <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">Actualités</Nav.Link>
                </Nav>
            </Col>
            <Col>
                <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">Infos pratiques</Nav.Link>
                <Nav.Link eventKey="link-1">Comment venir ?</Nav.Link>
                <Nav.Link eventKey="link-2">FAQ</Nav.Link>
                </Nav>
            </Col>
            <Col>
                <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">Politiques</Nav.Link>
                <Nav.Link eventKey="link-1">CGU</Nav.Link>
                <Nav.Link eventKey="link-2">Mentions légales</Nav.Link>
                </Nav>
            </Col>
        </Row>
        <Row>
            <Col className="text-center">
                <p> © 2021 Symfony Concert - Tous droits réservés</p>
            </Col>
        </Row>
    </Container>
    </footer>
    )
    }
}


export default Footer;