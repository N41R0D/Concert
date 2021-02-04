import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Row,
  Col
} from "react-bootstrap";
import "./Menu.scss";
import React from "react";
import { Link, withRouter } from "react-router-dom";

import { TiShoppingCart } from 'react-icons/ti';

class Menu extends React.Component {
  handleClick = (path, e) => {
    e.stopPropagation();
    this.nextPath(path);
  }
  
  nextPath(path) {

    this.props.history.push(path);
  }

  render() {
    return (
        <Navbar bg="primary" variant="dark">
          <Container fluid >
            <Row>
              <Col xs md lg="2">
                <Navbar.Brand as={Link} to="/">LOGO</Navbar.Brand>
              </Col>
              <Col xs md lg="8" id="menu-links">
                <Nav justify>
                  <NavDropdown
                    title="Programmation"
                    id="nav-dropdown"
                    renderMenuOnMount={true}
                    onClick={(e) => this.handleClick('/scheduled', e)}
                  >
                    <NavDropdown.Item onClick={(e) => this.handleClick('/scheduled/all-events', e)}>
                      Tous les évènements
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={(e) => this.handleClick('/scheduled/aix-en-provence', e)}>
                      Aix-en-Provence
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={(e) => this.handleClick('/scheduled/bourges', e)}>
                      Bourges
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={(e) => this.handleClick('/scheduled/cannes', e)}>
                      Cannes
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={(e) => this.handleClick('/scheduled/dunkerque', e)}>
                      Dunkerque
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={(e) => this.handleClick('/scheduled/echirolles', e)}>
                      Echirolles
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={(e) => this.handleClick('/scheduled/how-to-book', e)}>
                      Comment réserver ?
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Restauration"
                    id="nav-dropdown"
                    renderMenuOnMount={true}
                    onClick={(e) => this.handleClick('/catering', e)}
                  >
                    <NavDropdown.Item onClick={(e) => this.handleClick('/catering/presentation', e)}>
                      Présentation
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={(e) => this.handleClick('/catering/book', e)}>
                      Réserver
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Parking"
                    id="nav-dropdown"
                    renderMenuOnMount={true}
                    onClick={(e) => this.handleClick('/parking', e)}
                  >
                    <NavDropdown.Item onClick={(e) => this.handleClick('/parking/presentation', e)}>
                      Présentation
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={(e) => this.handleClick('/parking/book', e)}>
                      Réserver
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Privatisation"
                    id="nav-dropdown"
                    renderMenuOnMount={true}
                    onClick={(e) => this.handleClick('/privatization', e)}
                  >
                    <NavDropdown.Item onClick={(e) => this.handleClick('/privatization/presentation', e)}>
                      Présentation
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={(e) => this.handleClick('/privatization/book', e)}>
                      Réserver
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={Link} to="/news">Actualités</Nav.Link>

                  <NavDropdown
                    title="Infos pratiques"
                    id="nav-dropdown"
                    renderMenuOnMount={true}
                    onClick={(e) => this.handleClick('/informations', e)}
                  >
                    <NavDropdown.Item onClick={(e) => this.handleClick('/informations/how-to-come', e)}>
                      Comment venir ?
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={(e) => this.handleClick('/informations/faq', e)}>FAQ</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                </Nav>
              </Col>
              <Col xs md lg="2">
                <Nav className="float-right">
                  {/** <Nav.Link as={Link} to="/account">Créer un compte</Nav.Link> **/}
                  <Nav.Link as={Link} to="/admin/concert">Créer un compte</Nav.Link>
                  <Nav.Link as={Link} to="/cart"><TiShoppingCart size={28} /></Nav.Link>
                </Nav>
              </Col>
            </Row>
          </Container>
        </Navbar>
    );
  }
}

export default withRouter(Menu);
