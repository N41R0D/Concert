import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import "./concerts.scss";
import {
  Container,
  Row,
  Col,
  ButtonGroup,
  Button,
  OverlayTrigger,
  Tooltip,
  Tabs,
  Tab,
  Pagination,
} from "react-bootstrap";
import Loader from "react-loaders";
import { getAllConcerts } from "../../../api/ConcertsApi";
import ConcertCard from "../../../component/concert-card-component/ConcertCard";
import moment from "moment";
import { lieuIdToName } from "../../../api/LieusApi";

class Concerts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    const date = moment().utcOffset("+1").format("DD/MM/YYYY");
    const concertsList = await getAllConcerts();

    const config = {
      headers: {
        Accept: "application/json",
      },
    };

    this.setState({
      isLoading: false,
      concertsList,
      date,
      currentPage: 1,
      concertsPerPage: 4,
    });
  }

  handleClick(event) {
    const id = event.target.id;
    this.setState({ currentPage: id });
  }

  render() {
    if (this.state.isLoading) {
      return <Loader />;
    }

    const { concertsList, currentPage, concertsPerPage } = this.state;

    const lastConcert = currentPage * concertsPerPage;
    const firstConcert = lastConcert - concertsPerPage;
    const currentConcerts = concertsList.slice(firstConcert, lastConcert);

    const renderConcerts = currentConcerts.map((concert, index) => {
      console.log(concert)
      return <ConcertCard key={index} concert={concert} />;
    });

    const pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(concertsList.length / concertsPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }

    const renderPagination = pageNumbers.map((number) => {
      if (number == currentPage) {
        return (
          <Pagination.Item
            key={number}
            id={number}
            active
            onClick={this.handleClick}
          >
            {number}
          </Pagination.Item>
        );
      } else {
        return (
          <Pagination.Item key={number} id={number} onClick={this.handleClick}>
            {number}
          </Pagination.Item>
        );
      }
    });

    return (
      <Container className="mt-4">
        <Tabs defaultActiveKey="concerts" id="uncontrolled-tab">
          <Tab eventKey="concerts" title="Concerts">
            <Container
              style={{ border: "1px solid" }}
              className="d-flex flex-column justify-content-center py-3 px-4"
            >
              <Row
                style={{ backgroundColor: "#ababab", borderRadius: "6px" }}
                className="p-2 pl-3 m-0"
              >
                <Col xs md lg={8} className="p-0 align-self-center">
                  Ajourd'hui nous sommes le : {this.state.date}
                </Col>
                <Col xs md lg={4} className="p-0">
                  <ButtonGroup
                    style={{ display: "flex" }}
                    className="justify-content-center"
                  >
                    <Button
                      disabled
                      style={{ pointerEvents: "none" }}
                      size="sm"
                    >
                      Modifier un concert
                    </Button>
                    <Button variant="primary" size="sm">
                      Ajouter un concert
                    </Button>
                  </ButtonGroup>
                </Col>
              </Row>
              <Row className="m-0 mt-3">
                <span className="mb-2">Les derniers concerts créés :</span>
                {renderConcerts}
              </Row>
              <Row className="d-flex justify-content-center mt-4">
                <Pagination>{renderPagination}</Pagination>
              </Row>
            </Container>
          </Tab>
          <Tab disabled eventKey="orders" title="Commandes clients"></Tab>
          <Tab disabled eventKey="articles" title="Articles"></Tab>
        </Tabs>
      </Container>
    );
  }
}

export default Concerts;
