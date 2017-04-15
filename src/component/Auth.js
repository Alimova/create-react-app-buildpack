import React, {Component} from 'react';
//import Auth from './component/Auth';
import { Form } from './form/Form';
import axios from 'axios';
import './Auth.css'
import { encryptedPassword } from '../utils/utils.js'

export default class Auth extends Component {
    constructor () {
        super()
        this.state = {
            username: "",
            password: "",
            login: true,
            error: ""
        }
    }
    handleOnChangeUserName = (e) => this.setState({username: e.target.value});
    handleOnChangePassword = (e) => this.setState({password: e.target.value});
    handleChangeMode = () => (
        this.setState({ login : !this.state.login }),
        this.setState({ error: ''})
    );

    handleAuthentication = (token) => {
        localStorage.setItem('token', token)
    }

    receiveToken = () =>{
        const url = 'https://grape-auth-boilerplate.herokuapp.com';
        const username = this.state.username;
        const password = this.state.password;

        axios.get(`${url}/users/token?username=${username}&password=${password}`)
        .then(response => this.handleAuthentication(response.data))
        .catch(req => this.setState({error: req.response.data.errors[0]}))
    }

    createUser = () => {
        const url = 'https://grape-auth-boilerplate.herokuapp.com'; //API

        const userData = {
            username:this.state.username,
            hashedPassword: encryptedPassword(this.state.password)
            //password:this.state.password
        }

        axios.post(`${url}/users`, userData)
            .then(res => res.status === 201 && this.receiveToken())
            .catch(req => this.setState({error: req.response.data}));
    }

    handleCreateUser = (event) => {
        event.preventDefault()

        this.createUser()
    }

    handleReceiveToken = (event) => {
        event.preventDefault()

        this.receiveToken()
    }

    render(){
        return(
            <div className="App">
                <ul className="tab-group">
                    <li onClick={this.handleChangeMode} className={this.state.login ? 'tab active' : 'tab'}><a href="#login">Log In</a></li>
                    <li onClick={this.handleChangeMode} className={!this.state.login ? 'tab active' : 'tab'}><a href="#signup">Sign Up</a></li>
                </ul>
                <Form paramId={'login'}
                      username={this.state.username}
                      password={this.state.password}
                      login={this.state.login}
                      handleOnChangeUserName={this.handleOnChangeUserName}
                      handleOnChangePassword={this.handleOnChangePassword}
                      handleReceiveToken={this.handleReceiveToken}
                    />
                <Form paramId={'sign-up'}
                      login={!this.state.login}
                      username={this.state.username}
                      password={this.state.password}
                      handleOnChangeUserName={this.handleOnChangeUserName}
                      handleOnChangePassword={this.handleOnChangePassword}
                      handleCreateUser={this.createUser}
                />
            </div>
        )
    }


}



