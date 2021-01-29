import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Button,InputGroup,FormControl, Nav } from 'react-bootstrap';
import "./Footer.scss"

class Footer extends Component {
    render() {        
    return (
        <footer>
        <Container className="footer">
        <Row>
            <Col className="text-center">
                <h5>Réseaux Sociaux</h5>
                <p>Suivez-nous sur nos réseaux sociaux pour vous tenir informé des concerts à venir !</p>
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
                <Nav.Link href="/home">Active</Nav.Link>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav>
            </Col>
            <Col>
                <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">Active</Nav.Link>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav>
            </Col>
            <Col>
                <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">Active</Nav.Link>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav>
            </Col>
            <Col>
                <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">Active</Nav.Link>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav>
            </Col>
            <Col>
                <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">Active</Nav.Link>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav>
            </Col>
        </Row>
        <Row>
            <Col className="text-center">
                <p> 2021 Symfony Concert - Tous droits réservés</p>
            </Col>
        </Row>
    </Container>
    </footer>
    )
    }
}


export default Footer;