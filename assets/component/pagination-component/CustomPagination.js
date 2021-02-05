import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class Pagination extends Component {
    render() {
        const pageNbr = this.props.pageNbr;

        const neighboorNbr = 2;

        return (
            <Pagination>
                <Pagination.First/>
                <Pagination.Item>{1}</Pagination.Item>
            </Pagination>
        )
    }
}

export default Pagination