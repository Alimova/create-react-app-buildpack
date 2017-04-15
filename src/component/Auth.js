import React, {Component} from 'react';
//import Auth from './component/Auth';
import { Form } from './form/Form';
import axios from 'axios';

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

    createUser = () => {
        const url = 'https://grape-auth-boilerplate.herokuapp.com'; //API

        const userData = {
            username:this.state.username,
            password:this.state.password
        }

        axios.post(`${url}/users`, {
            userData
        })
            .then(res => console.log(res))
            .catch(req => console.log(req));

    }

    render(){
        return(
            <div className="App">
                <Form username={this.state.username}
                      password={this.state.password}
                      login={this.state.login}
                      handleOnChangeUserName={this.handleOnChangeUserName}
                      handleOnChangePassword={this.handleOnChangePassword}
                    />
            </div>
        )
    }


}



