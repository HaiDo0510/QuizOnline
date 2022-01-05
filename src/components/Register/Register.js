import React, { Component } from 'react';

class Register extends React.Component {
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
                                <form>
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="email2" placeholder="Your email address..." />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" id="password2" placeholder="Your password..." />
                                    </div>
                                    <button type="button" className="btn btn-info btn-block btn-round">Register</button>
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