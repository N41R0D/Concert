import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class ConcertCard extends Component {
    render() {
        const concert = this.props.concert
        console.log(concert)

        return (
            <Container className="d-flex justify-content-center p-0 my-3">
                <Row style={{ border: "1px solid" }}>
                    <Col xs md lg={3} className="m-auto p-3">
                        <Image src="https://www.toutsurmesfinances.com/argent/wp-content/uploads/sites/3/2017/02/concert.jpg" fluid/>
                    </Col>
                    <Col xs md lg={9} className="py-3">
                        <Container>
                            <b>Artiste : </b>{concert.artistName}<br />
                            <b>Évènement : </b>{concert.concertName}<br />
                            <b>Date : </b>{concert.date}<br />
                            <b>Ouverture : </b>{concert.openingTime}<br />
                            <b>Lieu : </b>{concert.location}<br />
                            <b>Style musical : </b>concert.musicCategory<br />
                            <b>Tarification : </b>{concert.tarifCateg}<br />
                            <b>À propos de l'artiste : </b>{concert.artistPresentation.substring(0, 50)}... <Link to={"/concerts/" + concert.id}>Lire la suite</Link><br />
                            <b>Player audio/vidéo : </b>concert.isMultimedia
                        </Container>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ConcertCard;