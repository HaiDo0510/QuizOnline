import React, { Component } from 'react';
import * as API from '../../axios/auth/API_Register';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            password: ""
        };
    };

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const registerDto = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        };
        API.api_register(registerDto);
    };



    render() {
        return (
            <div className="modal fade" id="registerModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header border-bottom-0">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-title text-center">
                                <h4>Register</h4>
                            </div>
                            <div className="d-flex flex-column text-center">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <input type="email" className="form-control" name='email' id="email2" onChange={this.handleInputChange} placeholder="Your Email address..." />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name='username' id="username2" onChange={this.handleInputChange} placeholder="Your Username..." />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" name='password' id="password2" onChange={this.handleInputChange} placeholder="Your Password..." />
                                    </div>
                                    <button type="submit" className="btn btn-info btn-block btn-round">Register</button>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <div className="signup-section">Not a member yet? <a href="#a" className="text-info" data-toggle="modal" data-target="#loginModal" data-dismiss="modal" aria-label="Close"> Login</a>.</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;