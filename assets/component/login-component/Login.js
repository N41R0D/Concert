import axios from "axios";
import React, { useState, Component } from "react";
import { Button, Form, Container } from "react-bootstrap";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

class Login extends Component {
    constructor(props) {
        super(props);
        this.getToken = this.getToken.bind(this)
        this.handleChangeUsername = this.handleChangeUsername.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    getToken = async(username, password) => {
        console.log(username)
        console.log(password)

        const credentials = {
            "username": username,
            "password": password
        }

        const config = {
            headers: {
                'Accept': "application/json"
            }
        }

        const token = await axios.post("http://localhost:8000/api/login_check", credentials, config)
        .then(res => console.log(res.data))

        console.log(this.state.token)
    }

    handleSubmit = (e) => {
        this.getToken(this.state.username, this.state.password)
    }

    handleChangeUsername = (e) => {
        this.setState({ username: e.target.value })
        e.preventDefault()
    }

    handleChangePassword = (e) => {
        this.setState({ password: e.target.value })
        e.preventDefault()
    }

    render() {
        return (
            <Container className="mt-4 mb-4">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label
                            
                        >
                            Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={this.handleChangeUsername}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>
                            Password
                        </Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={this.handleChangePassword}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default Login;
