import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { api_listCourse } from '../../actions/API_Course';
import axios from 'axios';
import * as Constant from '../../Constant'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

class ListHistoryExam extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            historyExams: []
        };
    };

    componentDidMount() {
        axios({
            method: 'GET',
            headers: Constant.HEADER_API_TOKEN,
            url: Constant.API_EXAM
        }).then(res => {
            this.setState({
                historyExams: res.data
            });
        }).catch((error) => {
            console.log('Error', error);
        });
    }

    deleteExam(courseId) {
        if (window.confirm('Do you want to Delete')) {
            axios({
                method: 'DELETE',
                headers: Constant.HEADER_API_TOKEN,
                url: Constant.API_LISTCOURSE + '/' + courseId,
            }).then(res => {
                toast.success('Delete Course Success !');
                var filterResult = this.state.courses.filter((element) => {
                    return element.id !== courseId;
                });
                this.setState({
                    courses: filterResult
                });
            }).catch((error) => {
                toast.warning(error.response.data.message);
            });
        }
    }


    render() {
        return (
            <div className="container list-contrainer">
                <div className="table table-responsive w3-panel">
                    <h2 className='w3-center w3-monospace'>History Exam</h2>
                    <div className="">
                        <div className="w3-col" style={{ width: '75%' }}><p></p></div>
                        <Link to={'/admin/addCourse'}><button className="btn btn-danger w3-col" style={{ width: '15%' }}>Clear All History</button></Link>
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
                                <th>Course</th>
                                <th>Subject</th>
                                <th>Test</th>
                                <th>Mark</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Action</th>
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
                                    <td style={{ width: '15%' }}>
                                        <a href='#'><i className="fas fa-edit w3-margin-right"></i></a>
                                        <a href='#' onClick={() => { this.deleteExam(item.testId) }}><i className="fas fa-trash w3-margin-left text-danger"></i></a>
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

export default ListHistoryExam;