import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./seating.scss"

const GenerateRow = ({plan, handleClick}) => {
  const nbrMax = plan.length;
  const nbrRow = nbrMax/12;
  let from = 0;
  let to = 12;
  let generateRow = [];

  for (let index = 0; index < nbrRow; index++) {
    generateRow.push(
      <Row key={plan.id}>
      {
      plan.slice(from,to).map((plan)=>(
        
        <Seat key={plan.id} id={plan.id} available={plan.available} handleClick={handleClick} />
        
      ))
      }
      </Row>
    )
    from+=12
    to = to +12
  }
  return (
    generateRow
  )
}

const Seat = ({id, available, handleClick}) => {
  if (available) {
    return (
      <Col>
        <Button id={id} className="seat" variant="primary" size="sm" onClick={()=>handleClick({id})}></Button>
      </Col>
    )
  }
  else {
    return (
      <Col>
        <Button id={id} className="seat" variant="danger" size="sm" disabled></Button>
      </Col>
    )
  }
}


export default GenerateRow;


