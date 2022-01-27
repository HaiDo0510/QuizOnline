import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { api_listTest } from '../../actions/API_Test';
import axios from 'axios';
import * as Constant from '../../Constant'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

class HistoryExam extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            historyExams: []
        };
    };

    componentDidMount() {
        let userId = localStorage.getItem('userId');
        axios({
            method: 'GET',
            headers: Constant.HEADER_API_TOKEN,
            url: Constant.API_EXAM + '/' + userId
        }).then(res => {
            this.setState({
                historyExams: res.data
            });
        }).catch((error) => {
            console.log('Error', error);
        });
    }

    render() {
        return (
            <div className="container list-contrainer">
                <div className="table table-responsive w3-panel">
                    <h3 className="w3-wide w3-cursive w3-center"><b> History Exam</b></h3>
                    <br />
                    <form action="/action_page.php" className='w3-margin mx-4'>
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
                                <th>Course</th>
                                <th>Subject</th>
                                <th>Test</th>
                                <th>Mark</th>
                                <th>Date</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody className='w3-center'>
                            {this.state.historyExams.map((item, index) => (
                                <tr key={index}>
                                    <td style={{ width: '6%' }}>{index + 1}</td>
                                    <td>{item.subjectResponse && item.subjectResponse.courseDto && item.subjectResponse.courseDto.courseName}</td>
                                    <td>{item.subjectResponse && item.subjectResponse.subjectName}</td>
                                    <td>{item.testName}</td>
                                    <td style={{ width: '15%' }} className='font-weight-bold'>{item.mark.toFixed(1)}</td>
                                    <td>{new Date(item.dateTime).getDate().toString() + '/' + (new Date(item.dateTime).getMonth() + 1).toString().padStart(2, '0') + '/' + new Date(item.dateTime).getFullYear().toString()}</td>
                                    <td>{new Date(item.dateTime).getHours().toString().padStart(2, '0') + ':' + new Date(item.dateTime).getMinutes().toString().padStart(2, '0')}</td>
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

export default HistoryExam;