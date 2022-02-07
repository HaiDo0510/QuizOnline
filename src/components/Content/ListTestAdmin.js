import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { api_listTest } from '../../actions/API_Test';
import axios from 'axios';
import * as Constant from '../../Constant'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

class ListTestAdmin extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			tests: []
		};
		console.log('search: ', window.location.search);
	};

	componentDidMount() {
		let query = window.location.search;
		let index = query.indexOf("=");
		let id = query.slice(index);
		console.log('id: ', id);

		api_listTest().then(data => {
			this.setState({
				tests: data
			});
		}).catch((error) => {
			console.log('Error', error);
		});
	}

	render() {
		return (
			<div className="container list-contrainer">
				<div className="table table-responsive w3-panel">
					<h2 className='w3-center w3-monospace'>List Test</h2>
					<div className="">
						<div className="w3-col" style={{ width: '80%' }}>
							<Link to={'/admin/addTestFile'}>
								<button className="btn btn-info w3-col float-right mr-4" style={{ width: '15%' }}>Add File</button>
							</Link>
						</div>
						<Link to={'/admin/addTest'}>
							<button className="btn btn-success w3-col" style={{ width: '15%' }}>Add New</button>
						</Link>
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

export default ListTestAdmin;