import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image, Form, Nav } from "react-bootstrap";
import axios from 'axios';
import "./reservation.scss"
import GenerateRow from "../../component/seating-component/seating"
import { getConcertById, getLieuById, getUnavailableSeat, getOptions } from '../../api/ReservationApi'

const rowName = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]

const Prices = (priceMax, percent) => {
  const prices = [];
  if(priceMax != null){
    let tarifMax = parseFloat(priceMax);
    prices.push(tarifMax);
    for(let i=0; i<rowName.length; i++){
      let minus = (tarifMax*percent)/100
      let price = tarifMax - minus;
      tarifMax = price.toFixed(2);
      prices.push(tarifMax)
    }
  }
  return prices;
}

const SeatingPlan = (unavailable) => {
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

function handleClick(id) {
  let letter = id.id[0];
  let index = rowName.find(item => item === letter);
}

function getIdUrl() {
  var url2 = window.location.href; // or window.location.href for current url
  var captured = /id=([^&]+)/.exec(url2)[1]; // Value is in [1] ('384' in our case)
  var result = captured ? captured : "myDefaultValue";
  // console.log(result);
  return result;
}

const Reservation = () => {
  const idResa = getIdUrl()
  const [price, setPrice] = useState();
  const [unavailable, setUnavailable] = useState([]);
  const [concert, setConcert] = useState({
    idConcert: null,
    artist: null,
    concertName: null,
    dateConcert: null,
    heureConcert: null,
    idLieu: null,
    srcAffiche: null,
    categories: [],
    catTarif: null,
    tarifMax: null,
    pourcentTarif: null
  })

  const [lieu, setLieu] = useState({
    id: null,
    name: null,
    city: null,
    street: null,
    zipCode: null
  })
  //id, name, extraCost, description, reservation[]
  const [options, setOption] = useState([])

  useEffect(()=>{
    axios.all([getConcertById(idResa), getUnavailableSeat(idResa), getOptions()])
      .then(axios.spread((resConcert, resUnavailable, resOptions) => {
        setConcert({
          idConcert: resConcert.data.id,
          artist: resConcert.data.artistName,
          concertName: resConcert.data.concertName,
          dateConcert: resConcert.data.date,
          heureConcert: resConcert.data.openingTime,
          lieu: resConcert.data.idLieu,
          affiche: resConcert.data.affiche,
          categories: resConcert.data.categories,
          pourcentTarif: resConcert.data.pourcentTarif,
          tarifMax: resConcert.data.tarifMax
        });
        setUnavailable(resUnavailable.data);
        setOption(resOptions.data)
      })).catch(err => {
        console.log(err)
      });

  }, [])

  useEffect(()=>{
    if (concert.lieu != null) {
      getLieuById(concert.lieu).then(res => {
        setLieu({
          id: res.data.id,
          name: res.data.name,
          city: res.data.city,
          street: res.data.street,
          zipCode: res.data.zipCode
        })
      }).catch(err => {
        console.log(err)
      });
    }})

  const plan = [] = SeatingPlan(unavailable);
  const prices = [] = Prices(concert.tarifMax, concert.pourcentTarif)

  return (
    <>
      <Container>
        <Row>
          <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">Etape 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Etape 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Etape 3</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Etape 4</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Etape </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Etape 5</Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <Row>
          <Col>
            <h3>{concert.concertName} par {concert.artist}</h3>
          </Col>
        </Row>
        <Row>
              <Col>
                <Image src={concert.affiche} alt={concert.artist}></Image>
              </Col>
              <Col>
                <ul>
                  <li>Le {concert.dateConcert} à {concert.heureConcert}</li>
                  <li> {lieu.name}, {lieu.street} {lieu.zipCode} {lieu.city} </li>
                  <li> {concert.categories}</li>
                </ul>
              </Col>
          <Col>
            [plan google lieu]
          </Col>
            </Row>
        <Row>
          <Col>
            <h2>1. Choisissez vos places sur le plan :</h2>
          </Col>
        </Row>
        <Row>
          <Col>
                <ul>
                  <li>Cat 1 - {concert.tarifMax}€ à {prices[2]}€</li>
                  <li>Cat 2 - {prices[3]}€ à {prices[5]}€</li>
                  <li>Cat 3 - {prices[6]}€ à {prices[8]}€</li>
                </ul>
          </Col>
          <Col className="col-lg-10 col-md-10 col-sm-12">
            <GenerateRow plan={plan} handleClick={handleClick} />
          </Col>
        </Row>
        <Row>
          <h2>2. Choisissez le mode d'obtention des billets :</h2>
        </Row>
        <Row>
          <Col>
            {options.length > 0 &&
              <Form>
                {options.map((option) => (
                  <Row>
                    <Col>
                      <Form.Check
                        type="radio"
                        label={option.name}
                        id={option.id}
                      />
                      <p>{option.extraCost}€</p>
                    </Col>
                    <Col>
                      <p>{option.description}</p>
                    </Col>

                  </Row>
                ))}


              </Form>
            }
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Reservation;