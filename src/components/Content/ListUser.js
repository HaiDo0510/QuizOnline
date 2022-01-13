import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListUser extends React.Component {
    render() {
        return (
            <div className="container list-contrainer">
                <div className="table table-responsive w3-panel">
                    <h2 className='w3-center w3-monospace'>List User</h2>
                    <div className="">
                        <div className="w3-col" style={{ width: '75%' }}><p></p></div>
                        <button className="btn btn-success w3-col" style={{ width: '15%' }}>Add New</button>
                        <div className="w3-col" style={{ width: '20%' }}><p></p></div>
                    </div>
                    <form action="/action_page.php" className='w3-margin my-4 mx-4 w3-padding-16'>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search" name="search" />
                            <div className="input-group-btn">
                                <button className="btn btn-default w3-blue" type="submit"><i className="fas fa-search"></i></button>
                            </div>
                        </div>
                    </form>
                    <table className="table table-bordered table-hover">
                        <thead className='w3-center'>
                            <tr className="w3-blue-grey">
                                <th>No.</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className='w3-center'>
                            <tr>
                                <td>1</td>
                                <td>John</td>
                                <td>john@example.com</td>
                                <td>User</td>
                                <td style={{ width: '15%' }}>
                                    <a href='#'><i className="fas fa-edit w3-margin-right"></i></a>
                                    <a href='#'><i className="fas fa-trash w3-margin-left"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Mary</td>
                                <td>mary@example.com</td>
                                <td>Admin</td>
                                <td style={{ width: '15%' }}>
                                    <a href='#'><i className="fas fa-edit w3-margin-right"></i></a>
                                    <a href='#'><i className="fas fa-trash w3-margin-left"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>July</td>
                                <td>july@example.com</td>
                                <td>User</td>
                                <td style={{ width: '15%' }}>
                                    <a href='#'><i className="fas fa-edit w3-margin-right"></i></a>
                                    <a href='#'><i className="fas fa-trash w3-margin-left"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ListUser;