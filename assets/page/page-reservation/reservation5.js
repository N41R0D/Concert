import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Button, Nav, Card } from "react-bootstrap";
import axios from 'axios';
import "./reservation.scss"

const Step5 = () => {

    return (
        <>
            <Container>
                <Row>
                    <Col className="col-6">
                    <h2>Merci [user] pour votre achat</h2>
                    <p>REF RESERVATION</p>
                    <p>Email confirmation</p>
                    <p>Email confirmation</p>
                    <p>Email confirmation</p>
                    <h3>Détail des réservation</h3>
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
                    <Button>Passer une autre commande</Button>
                    <Button>Retour à la page d'accueil</Button>
                </Row>
            </Container>
        </>
    )
}

export default Step5;