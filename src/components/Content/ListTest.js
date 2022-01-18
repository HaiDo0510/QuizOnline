import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { api_listTest } from '../../actions/API_Test';
import axios from 'axios';
import * as Constant from '../../Constant'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

class ListTest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tests: []
        };
    };

    componentDidMount() {
        let query = window.location.search;
        let index = query.indexOf("=");
        let id = query.slice(index + 1);
        axios({
            method: 'GET',
            headers: Constant.HEADER_API_TOKEN,
            url: Constant.API_LISTTEST + '/all/' + id
        }).then(res => {
            this.setState({
                tests: res.data
            });
        }).catch((error) => {
            console.log('Error', error);
        });
    }

    // shouldComponentUpdate() {
    //     console.log('shouldComponentUpdate');
    //     return true;
    // }

    // componentWillUpdate() {
    //     console.log('componentWillUpdate');
    // }

    // componentDidUpdate() {
    //     console.log('componentDidUpdate');
    // }



    render() {
        return (
            <div className="container list-contrainer">
                <div className="table table-responsive w3-panel">
                    <h4 className='w3-left w3-opacity'>{this.state.tests[0] && this.state.tests[0].subjectResponse && this.state.tests[0].subjectResponse.courseDto && this.state.tests[0].subjectResponse.courseDto.courseName} \ {this.state.tests[0] && this.state.tests[0].subjectResponse && this.state.tests[0].subjectResponse.subjectName} </h4>
                    <br />
                    <form action="/action_page.php" className='w3-margin my-4 mx-4 w3-padding-16'>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search" name="search" />
                            <div className="input-group-btn">
                                <button className="btn btn-default w3-green" type="submit"><i className="fas fa-search"></i></button>
                            </div>
                        </div>
                    </form>
                    <table className="table table-bordered table-hover">
                        <thead className='w3-center'>
                            <tr className="w3-orange">
                                <th>No.</th>
                                <th>Test Name</th>
                                <th>Time</th>
                                <th>Level</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className='w3-center'>
                            {this.state.tests.map((item, index) => (
                                <tr key={index}>
                                    <td style={{ width: '10%' }}>{index + 1}</td>
                                    <td>{item.title}</td>
                                    <td>{item.duration.toString().padStart(2, '0')}:{"0".toString().padStart(2, '0')}</td>
                                    <td style={{ width: '15%' }}>{item.testLevel == 1 ? 'Basic' : 'Avance'}</td>
                                    <td style={{ width: '20%' }}>
                                        <Link className="" to={'/user/doQuiz?id=' + item.id}><i className="fas fa-sign-in-alt"></i> Do Test</Link>
                                    </td>
                                </tr>
                            ))}
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

export default ListTest;