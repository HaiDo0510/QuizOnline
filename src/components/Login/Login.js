import React, { Component } from 'react';
import * as API from '../../actions/API_Auth';
import { withRouter } from '../../components/WithRouter';
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.router = this.router.bind(this);
    };

    router(url) {
        this.props.navigate(url);
    }

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
        const loginDto = {
            email: this.state.email,
            password: this.state.password
        };
        API.api_login(loginDto).then(res => {
            const roles = res.data.roles[0].authority;
            const email = res.data.email;
            const username = res.data.username;
            const accessToken = res.data.accessToken;
            localStorage.setItem("email", email);
            localStorage.setItem("username", username);
            localStorage.setItem("roles", roles);
            localStorage.setItem("accessToken", accessToken);
            if (roles === "ROLE_ADMIN") {
                // this.router("/admin");
                window.location.href = '/admin';
            }
            if (roles === "ROLE_USER") {
                // this.router("/user");
                window.location.href = '/user';
            }
            
        }).catch((error) => {
            toast.warning('Email or password Invalid !');
            console.log(error);
        })

    };

    render() {
        return (
            <div className="modal fade" id="loginModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header border-bottom-0">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-title text-center">
                                <h4>Login</h4>
                            </div>
                            <div className="d-flex flex-column text-center">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <input type="email" className="form-control" name='email' id="email1" onChange={this.handleInputChange} placeholder="Your email address..." />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" name='password' id="password1" onChange={this.handleInputChange} placeholder="Your password..." />
                                    </div>
                                    <button type="submit" className="btn btn-info btn-block btn-round">Login</button>
                                </form>
                                <div className="text-center text-muted delimiter">or use a social network</div>
                                <div className="d-flex justify-content-center social-buttons">
                                    <button type="button" id="icon-twitter" className="btn btn-secondary btn-round mx-2" data-toggle="tooltip" data-placement="top" title="Twitter">
                                        <i className="fab fa-twitter" />
                                    </button>
                                    <button type="button" id="icon-facebook" className="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Facebook">
                                        <i className="fab fa-facebook" />
                                    </button>
                                    <button type="button" id="icon-linkedin" className="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Linkedin">
                                        <i className="fab fa-linkedin" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <div className="signup-section">Not a member yet? <a href="#a" className="text-info" data-toggle="modal" data-target="#registerModal" data-dismiss="modal" aria-label="Close"> Register</a>.</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);