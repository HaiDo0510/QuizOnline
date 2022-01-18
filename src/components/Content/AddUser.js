import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { api_createUser } from '../../actions/API_User';
import { withRouter } from '../../components/WithRouter';

class AddUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
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
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            roleId: this.state.roleId,
            status: this.state.status
        };
        api_createUser(userDto);
        // this.router('/admin/listUser');
    };

    router(url) {
        this.props.navigate(url);
    }

    render() {
        return (
            <div className="container add-contrainer">
                <div className="table table-responsive w3-panel">
                    <h2 className='w3-center w3-monospace'>Add User</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username" className='font-weight-bold'>UserName:</label>
                            <input type="username" className="form-control" id="username" placeholder="Enter email" name="username" onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className='font-weight-bold'>Email:</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter password" name="email" onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className='font-weight-bold'>Password:</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter password" name="password" onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="repassword" className='font-weight-bold'>RePassword:</label>
                            <input type="password" className="form-control" id="repassword" placeholder="Enter repassword" name="password" onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="sel1" className='font-weight-bold'>Role:</label>
                            <select className="form-control" id="role" name="roleId" onChange={this.handleInputChange}>
                                {this.state.role.map((item, index) => (
                                    <option key={index} className='w3-panel' value={item.id}>{item.roleName}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="sel1" className='font-weight-bold'>Status:</label>
                            <select className="form-control" id="status" name="status" onChange={this.handleInputChange} value={this.state.status}>
                                <option className='w3-panel' value={true}>{ 'Active'}</option>
                                <option className='w3-panel' value={false}>{'Deactive'}</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(AddUser);