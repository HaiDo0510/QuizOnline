import React, { Component } from 'react';
import axios from 'axios';
import { api_createUser } from '../../actions/API_User';
import { withRouter } from '../../components/WithRouter';
import * as Constant from '../../Constant'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { getIdByQueryParam } from '../../common/Utils';

class UpdateUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            username: "",
            email: "",
            password: "",
            repassword: "",
            roleId: "2",
            role: [
                {
                    id: 2,
                    roleName: "USER"
                },
                {
                    id: 1,
                    roleName: "ADMIN"
                }
            ],
            status: true
        };
        this.router = this.router.bind(this);
    };

    componentDidMount() {
        let query = window.location.search;
        let userId = getIdByQueryParam(query);
        axios({
            method: 'GET',
            headers: Constant.HEADER_API_TOKEN,
            url: Constant.API_LISTUSER + '/' + userId,
        }).then(res => {
            this.setState({
                id: res.data.id,
                username: res.data.username,
                email: res.data.email,
                roleId: res.data.roleDto.id,
                status: res.data.status
            })
        }).catch((error) => {
            toast.warning(error.response.data.message);
        });
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
        const userDto = {
            id: this.state.id,
            username: this.state.username,
            roleId: this.state.roleId,
            status: this.state.status
        };
        api_createUser(userDto);
    };

    router(url) {
        this.props.navigate(url);
    }

    render() {
        return (
            <div className="container add-contrainer">
                <div className="table table-responsive w3-panel">
                    <h2 className='w3-center w3-monospace'>Update User</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username" className='font-weight-bold'>UserName:</label>
                            <input type="username" className="form-control" id="username" placeholder="Enter email" name="username" onChange={this.handleInputChange} value={this.state.username} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className='font-weight-bold'>Email:</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter password" name="email" onChange={this.handleInputChange} value={this.state.email} disabled />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className='font-weight-bold'>Password:</label>
                            <input type="password" className="form-control" id="password" placeholder="*******" name="password" onChange={this.handleInputChange} disabled />
                        </div>
                        <div className="form-group">
                            <label htmlFor="repassword" className='font-weight-bold'>RePassword:</label>
                            <input type="repassword" className="form-control" id="repassword" placeholder="*******" name="password" onChange={this.handleInputChange} disabled />
                        </div>
                        <div className="form-group">
                            <label htmlFor="sel1" className='font-weight-bold'>Role:</label>
                            <select className="form-control" id="role" name="roleId" onChange={this.handleInputChange} value={this.state.roleId}>
                                {this.state.role.map((item, index) => (
                                    <option key={index} className='w3-panel' value={item.id}>{item.roleName}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="sel1" className='font-weight-bold'>Status:</label>
                            <select className="form-control" id="status" name="status" onChange={this.handleInputChange}>
                                <option className='w3-panel' value={true}>{'Active'}</option>
                                <option className='w3-panel' value={false}>{'Deactive'}</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-success">Update</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(UpdateUser);