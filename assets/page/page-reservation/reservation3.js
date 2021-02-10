import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Nav, Card } from "react-bootstrap";
import axios from 'axios';
import "./reservation.scss"

const Step3 = () => {

    return (
        <>
            <Container>
                <Row>
                    <Col className="col-6">
                    <h2>Vous avez déjà un compte</h2>
                    <Form>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
</Form>
                        <Button variant="primary" type="submit">
                            Submit
  </Button>
                    </Col>
                    <Col>
                    <h2>Vous n'avez pas de compte</h2>
                    <p>Créez votre compte et simplifiez vos réservations.
Conservez vos données en toute sécurité et évitez de
remplir vos informations à chaque commande.
Gérez vos alertes e-mails pour vos artistes ou salles
préférées.
Téléchargez et imprimez vos E-Tickets et factures
d'achat directement depuis votre compte.
</p>
                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default Step3;