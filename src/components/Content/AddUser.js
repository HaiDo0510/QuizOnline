import React, { Component } from 'react';

class AddUser extends React.Component {
    render() {
        return (
            <div className="container add-contrainer">
                <div className="table table-responsive w3-panel">
                    <h2 className='w3-center w3-monospace'>Add User</h2>
                    <form action="/action_page.php">
                        <div className="form-group">
                            <label htmlFor="username" className='font-weight-bold'>UserName:</label>
                            <input type="username" className="form-control" id="username" placeholder="Enter email" name="username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className='font-weight-bold'>Email:</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter password" name="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className='font-weight-bold'>Password:</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter password" name="password" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="repassword" className='font-weight-bold'>RePassword:</label>
                            <input type="repassword" className="form-control" id="repassword" placeholder="Enter repassword" name="password" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="sel1" className='font-weight-bold'>Role:</label>
                            <select className="form-control" id="sel1">
                                <option className='w3-panel'>1</option>
                                <option className='w3-panel'>2</option>
                                <option className='w3-panel'>3</option>
                                <option className='w3-panel'>4</option>
                            </select>
                        </div>
                        <div className="form-group form-check">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                            </label>
                        </div>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddUser;