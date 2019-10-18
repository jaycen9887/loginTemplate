import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col, Form, FormGroup, FormControl, FormText, Button} from 'react-bootstrap';
// import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Home extends Component {
    constructor(props){
        super(props);

        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);

        this.state = {
            username: "",
            password: "",
        }
    }

    componentDidMount(){

    }

    handleEmailChange(e){
        e.preventDefault();
        this.setState({username: e.target.value});
    }

    handlePasswordChange(e){
        e.preventDefault();
        this.setState({password: e.target.value});
    }

    handleSubmit(){
        console.log(this.state.username + " | " + this.state.password);
        axios.get('/login', {username: this.state.username, pazzword: this.state.password}).then(res => {
            console.log("Hello! ");
        });
    }

    render(){
        return (
            <div className="horizonal-center">
                <Row>
                    <Col>
                        <Form className="login-form">
                            <h4>Login</h4>
                            <FormGroup>
                                <FormControl type="email" placeholder="Username" onChange={this.handleEmailChange}/>
                            </FormGroup>
                            <FormGroup>
                                <FormControl type="password" placeholder="Password" onChange={this.handlePasswordChange}/>
                            </FormGroup>
                            <FormGroup>
                                <FormText>
                                    Not a member yet? No problem <a href="/register">register here!!</a>
                                </FormText>
                            </FormGroup>
                            <Button variant="primary" onClick={this.handleSubmit}>Login</Button>
                        </Form>
                    </Col>
                    <Col xs={8} className="intro">
                        <h1>Welcome to our login page!</h1>
                        <h3>Either login or signup now.</h3>
                    </Col>
                </Row>

            </div>
        )
    }
}