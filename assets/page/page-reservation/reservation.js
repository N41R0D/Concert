import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image, Button, Nav, Card } from "react-bootstrap";
import Footer from "../../component/footer-component/Footer";
import axios from 'axios';
import "./reservation.scss"
import GenerateRow from "../../component/seating-component/seating"

const rowName = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]

const unavailable = ["A1", "D3"]

const SeatingPlan = () => {
  const nbrMax = 108;
  const nbrCol = 12;
  const nbrRow = nbrMax / nbrCol;
  const plan = [];

  for (let j = 0; j < nbrRow; j++) {
    var id = rowName[j];
    for (let i = 1; i <= nbrCol; i++) {
      var idCol = id + i;
      if (unavailable.find(item => item === idCol)) {
        plan.push({ id: idCol, available: false });
      }
      else {
        plan.push({ id: idCol, available: true });
      }
    }
  }
  return (plan);
};

const Reservation = (props) => {

  // URL pour récupérer les places non disponibles sur la réservation
  const availableUrl = "/api/concerts/checkdispo";
  const baseUrl = "https://127.0.0.1:8000";
  const url = "https://127.0.0.1:8000/api/concerts/50";

  const [data, setData] = useState({
    artist: "",
    concert: "",
    dateConcert: null,
    heureConcert: null,
    idLieu: null,
    affiche: "",
    categories: [],
    tarifCatef: 0,
    tarifMax: null,
    pourcentTarif: null
  });

  const [lieu, setLieu] = useState({ 
    id: null, 
    name: null, 
    city: null,
    street: null,
    zipCode: null})

  useEffect(() => {
    axios.get(url, {
      headers: {
        Accept: "application/json",
      }
    }).then(res => {
      setData({
        artist: res.data.artistName,
        concert: res.data.concertName,
        dateConcert: res.data.date,
        heureConcert: res.data.openingTime,
        lieu: res.data.idLieu,
        affiche: res.data.affiche,
        categories: res.data.categories,
        pourcentTarif: res.data.pourcentTarif
      })
    })
  })

  useEffect(() => {
    const reqUrl = baseUrl + data.lieu;
    console.log(reqUrl);
    axios.get(reqUrl, {
      headers: {
        Accept: "application/json",
      }
    }).then(res => {
      setLieu({
        id: res.data.id,
        name: res.data.name,
        city: res.data.city,
        street: res.data.street,
        zipCode: res.data.zipCode
      })
    })
  })


  const plan = [] = SeatingPlan();

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h3>{data.artist}</h3>
            <Row>
              <Col>
                <Image src={data.affiche}></Image>
              </Col>
              <Col>
                <ul>
                  <li>Le {data.dateConcert} à {data.heureConcert}</li>
                  <li> {lieu.street}, {lieu.name}, {lieu.zipCode}</li>
                  <li> {data.categories}</li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col>[plan google lieu]</Col>
        </Row>
        <Row>
          <Col>
        <h2>1. Choisissez vos places sur le plan :</h2>
        <GenerateRow plan={plan} />
          </Col>
        </Row>
        <Row>
          <h2>2. Choisissez le mode d'obtention des billets :</h2>
        </Row>
      </Container>
    </>
  )
}

export default Reservation;