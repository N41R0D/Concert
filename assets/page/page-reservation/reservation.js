import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image, Button, Nav, Card } from "react-bootstrap";
import Footer from "../../component/footer-component/Footer";
import axios from 'axios';
import "./reservation.scss"


const SeatingPlan = () => {
  
}

const Reservation = (props) => {

  const url = "https://127.0.0.1:8000/api/concerts/1";

  const [data, setData] = useState({ artist: "", concert: "", dateConcert: null, heureConcert: null, lieu: null });

  useEffect(() => {
    axios.get(url, {
      headers: {
        Accept: "application/json",
      }
    }).then(res => {
      // console.log(res);
      setData({ artist: res.data.artistName, concert: res.data.concertName, dateConcert: res.data.date })
    })
  })

  generateSeat((nbrMax) => {

  })

  generateRow((nbrCol)=>{
    if(nbrCol=12){

    }
  })



  return (
    <>

      {/* 1er Composant : Step 1 ; 2 boutons */}
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">1. Réservation</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">2. Panier d'achat</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">3. Coordonnées</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" >
            4. Paiement
      </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" >
            5. Confirmation
      </Nav.Link>
        </Nav.Item>
      </Nav>

      {/* Component de présentation du groupe */}
      <Container>
        <Row>
          <Col>
            <h3>{data.artist}</h3>
            <Row>
              <Col>
                <Image></Image>
              </Col>
              <Col>
                <ul>
                  <li>{data.dateConcert}</li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col>[plan google lieu]</Col>
        </Row>
        {/* plan de salle : calcul dynamique des place et prix */}
        <Row>
          {/* Scène */}
        </Row>
        <Row>
          <Col>
            <Button className="seat" variant="primary" size="sm"></Button>
          </Col>
        </Row>
      </Container>
      {/* Obtention des billets */}

      {/* Plan de salle = 1 composant réutilisable parce que différent en step 2 */}
      {/* Recap : display des informations en dynamique : comment faire une SPA avec React */}
      {/* Recap de tout le panie = 1 seul concert pour MVP */}
    </>
  )
}

export default Reservation;