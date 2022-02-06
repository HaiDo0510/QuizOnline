import React, { Component } from 'react';
import { getIdByQueryParam } from '../../common/Utils';
import * as Constant from '../../Constant'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { withRouter } from '../../components/WithRouter';

class CheckQuiz extends React.Component {
	constructor() {
		super();
		this.state = {
			test: []
		};
		this.router = this.router.bind(this);
	}

	componentDidMount() {
		let userId = localStorage.getItem('userId');
		let query = window.location.search;
		let index1 = query.indexOf("=");
		let index2 = query.indexOf("&");
		let testId = query.slice(index1 + 1, index2);
		let timeStr = query.slice(index2 + 6).replace('T', ' ');
		let time = (new Date(timeStr).getFullYear().toString()
			+ '-' + (new Date(timeStr).getMonth() + 1).toString().padStart(2, '0')
			+ '-' + new Date(timeStr).getDate().toString().padStart(2, '0')
			+ ' ' + new Date(timeStr).getHours().toString().padStart(2, '0')
			+ ':' + new Date(timeStr).getMinutes().toString().padStart(2, '0')
			+ ':' + new Date(timeStr).getSeconds().toString().padStart(2, '0')
			+ '.' + new Date(timeStr).getMilliseconds().toString().padStart(3, '0'));
			console.log(time);
		axios({
			method: 'GET',
			headers: Constant.HEADER_API_TOKEN,
			url: Constant.API_USER_ANSWER + '/' + testId + '/' + userId + '/' + time,
		}).then(res => {
			this.setState({
				test: res.data
			});
		}).catch((error) => {
			toast.warning(error.response.data.message);
		});
	}

	router(url) {
		this.props.navigate(url);
	}

	render() {
		return (
			<div>
				<div className="table table-responsive w3-panel">
					<br />
					<h3 className="w3-wide w3-cursive w3-center"><b> Result Test</b></h3>
					<br />
				</div>
				<form>
					{this.state.test && this.state.test.questions && this.state.test.questions.map((item, index) => (
						<div className="container mx-auto w-75 p-4 my-4 border" key={index}>
							<div className="progress">
								{item.status === true ? <div className="progress-bar bg-success" style={{ width: '100%' }}></div>
									: <div className="progress-bar bg-danger" style={{ width: '100%' }}></div>}
							</div>
							<h2 className='pt-2'>{index + 1}. {item.title}</h2>
							<div className="form-check">
								<label className="form-check-label" htmlFor="radio1">
									<input type="radio" className="form-check-input" id="radio1"
										name={item.id} value={item.answers[0] && item.answers[0].id} />
									A. {item.answers[0] && item.answers[0].title}
								</label>
							</div>
							<div className="form-check">
								<label className="form-check-label" htmlFor="radio2">
									<input type="radio" className="form-check-input" id="radio2"
										name={item.id} value={item.answers[1] && item.answers[1].id} />
									B. {item.answers[1] && item.answers[1].title}
								</label>
							</div>
							<div className="form-check">
								<label className="form-check-label" htmlFor="radio2">
									<input type="radio" className="form-check-input" id="radio2"
										name={item.id} value={item.answers[2] && item.answers[2].id} />
									C. {item.answers[2] && item.answers[2].title}
								</label>
							</div>
							<div className="form-check">
								<label className="form-check-label" htmlFor="radio2">
									<input type="radio" className="form-check-input" id="radio2"
										name={item.id} value={item.answers[3] && item.answers[3].id} />
									D. {item.answers[3] && item.answers[3].title}
								</label>
							</div>
						</div>
					))}
				</form>
			</div >
		);
	}
}

export default withRouter(CheckQuiz);

