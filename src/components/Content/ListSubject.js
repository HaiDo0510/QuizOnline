import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { api_listSubject } from '../../actions/API_Subject';
import axios from 'axios';
import * as Constant from '../../Constant'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

class ListSubject extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            subjects: []
        };
    };

    componentDidMount() {
        api_listSubject().then(data => {
            this.setState({
                subjects: data
            });
            console.log(this.state.subjects);
        }).catch((error) => {
            console.log('Error', error);
        });
    }

    deleteCourse(subjectId) {
        if (window.confirm('Do you want to Delete')) {
            axios({
                method: 'DELETE',
                headers: Constant.HEADER_API_TOKEN,
                url: Constant.API_LISTSUBJECT + '/' + subjectId,
            }).then(res => {
                toast.success('Delete Subject Success !');
                var filterResult = this.state.subjects.filter((element) => {
                    return element.id !== subjectId;
                });
                this.setState({
                    subjects: filterResult
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
                    <h2 className='w3-center w3-monospace'>List Subject</h2>
                    <div className="">
                        <div className="w3-col" style={{ width: '75%' }}><p></p></div>
                        <Link to={'/admin/addSubject'}><button className="btn btn-success w3-col" style={{ width: '15%' }}>Add New</button></Link>
                        <div className="w3-col" style={{ width: '20%' }}><p></p></div>
                    </div>
                    <form action="#" className='w3-margin my-4 mx-4 w3-padding-16'>
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
                                <th>Subject Name</th>
                                <th>Coures Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className='w3-center'>
                            {this.state.subjects.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.subjectName}</td>
                                    <td>{item.courseDto.courseName}</td>
                                    <td style={{ width: '15%' }}>
                                        <a href='#'><i className="fas fa-edit w3-margin-right"></i></a>
                                        <a href='#' onClick={() => { this.deleteCourse(item.id) }}><i className="fas fa-trash w3-margin-left text-danger"></i></a>
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

export default ListSubject;