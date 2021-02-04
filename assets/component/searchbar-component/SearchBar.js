import React from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';

const SearchBar = () => {
  return (
    <Container fluid className="bg-primary">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <br></br>
          <Form.Control type="text" placeholder="Search" />
          <br></br>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchBar