import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Button, Nav, Card } from "react-bootstrap";
import axios from 'axios';
import "./reservation.scss"

const Step4 = () => {

    return (
        <>
            <Container>
                <Row>
                    <Col className="col-6">
                    <h2>Bonjour [user]</h2>
                    <h3>Récap</h3>
                    <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>N°</th>
                                    <th>Nbr place</th>
                                    <th>Artiste/Groupe</th>
                                    <th>Lieu</th>
                                    <th>Date et heure</th>
                                    <th>Catégorie tarif</th>
                                    <th>tarif</th>
                                    <th>BOUTON DELETE</th>
                                </tr>
                            </thead>
                        </Table>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    Obtention des billets :
                    </Col>
                    <Col>
                    [Row bc plusieurs artiste]
                    Nom Artiste
                    </Col>
                    <Col>
                    type ticket
                    </Col>
                    <Col>
                    prix
                    </Col>
                </Row>
                <Row>
                    <Col>
                    Montant total
                    </Col>
                </Row>
                <Row>
                    <h3>Votre paiement</h3>
                </Row>
                <Row>
                    <Button>Annuler</Button>
                    <Button>Valider et payer</Button>
                </Row>
            </Container>
        </>
    )
}

export default Step4;