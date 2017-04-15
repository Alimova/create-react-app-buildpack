import React, {Component} from 'react';
//import Auth from './component/Auth';
import { Form } from './form/Form'

export default class Auth extends Component {
    constructor () {
        super()
        this.state = {
            username: "",
            password: "",
            login: true
        }
    }
    handleOnChangeUserName = (e) => this.setState({username: e.target.value});
    handleOnChangePassword = (e) => this.setState({password: e.target.value});

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



