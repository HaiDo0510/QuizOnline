import React, { Component } from 'react';
import { getIdByQueryParam } from '../../common/Utils';
import * as Constant from '../../Constant'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { withRouter } from '../../components/WithRouter';

class DoQuiz extends React.Component {
    constructor() {
        super();
        this.state = {
            test: [],
            questions: [],
            result: "",
            time: {
                hours: '0'.toString().padStart(2, '0'),
                minutes: '0'.toString().padStart(2, '0'),
                seconds: '0'.toString().padStart(2, '0'),
                milliseconds: 0,
            },
            duration: 0,
            timer: null
        };
        this.startTimer = this.start.bind(this);
        this.router = this.router.bind(this);
    }

    componentDidMount() {
        let query = window.location.search;
        let id = getIdByQueryParam(query);
        axios({
            method: 'GET',
            headers: Constant.HEADER_API_TOKEN,
            url: Constant.API_LISTTEST + '/' + id,
        }).then(res => {
            this.setState({
                test: res.data,
                duration: res.data.duration * 60 * 1000
            });
        }).catch((error) => {
            toast.warning(error.response.data.message);
        });
        // document.getElementById("myModal").modal('show'); 
    }


    msToTime(duration) {
        let milliseconds = parseInt((duration % 1000));
        let seconds = Math.floor((duration / 1000) % 60);
        let minutes = Math.floor((duration / (1000 * 60)) % 60);
        let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

        hours = hours.toString().padStart(2, '0');
        minutes = minutes.toString().padStart(2, '0');
        seconds = seconds.toString().padStart(2, '0');
        milliseconds = milliseconds.toString().padStart(3, '0');

        return {
            hours,
            minutes,
            seconds,
            milliseconds
        };
    }

    start() {
        if (!this.state.timer) {
            this.state.startTime = Date.now();
            this.timer = window.setInterval(() => this.run(), 10);
        }
    }

    run() {
        const diff = Date.now() - this.state.startTime;
        // If you want to count up
        // this.setState(() => ({
        //  time: this.msToTime(diff)
        // }));

        // count down
        let remaining = this.state.duration - diff;
        if (remaining < 0) {
            remaining = 0;
        }
        this.setState(() => ({
            time: this.msToTime(remaining)
        }));
        if (remaining === 0) {
            // send answer
            toast.warning('Time out !');
            const testCheckDto = {
                userId: localStorage.getItem('userId'),
                testId: this.state.test.id,
                questions: this.state.questions
            };
            axios({
                method: 'POST',
                headers: Constant.HEADER_API_TOKEN,
                url: Constant.API_EXAM,
                data: testCheckDto
            }).then(res => {
                toast.success('Add Exam Success !');
                this.setState({
                    result: res.data.mark
                });
            }).catch((error) => {
                toast.warning(error.response.data.message);
            });
            // clear time
            window.clearTimeout(this.timer);
            this.timer = null;
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        const QuestionCheck = {
            id: name,
            answerId: value
        };
        var question = this.state.questions
        this.setState({
            questions: question.concat(QuestionCheck)
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const testCheckDto = {
            userId: localStorage.getItem('userId'),
            testId: this.state.test.id,
            questions: this.state.questions
        };
        axios({
            method: 'POST',
            headers: Constant.HEADER_API_TOKEN,
            url: Constant.API_EXAM,
            data: testCheckDto
        }).then(res => {
            localStorage.setItem("resultExam", res.data.mark.toFixed(2));
            this.router('/user/resultExam');
            // toast.success('Send Answer Success!: ' + res.data.mark.toFixed(2));
        }).catch((error) => {
            toast.warning(error.response.data.message);
        });
    };

    router(url) {
        this.props.navigate(url);
    }

    render() {
        return (
            <div>
                {/* <div className="modal" id="myModal" aria-hidden="false">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header w3-center">
                                <h4 className="modal-title w3-center mx-0">Result Your Exam:</h4>
                                <button type="button" className="close" data-dismiss="modal">×</button>
                            </div>
                            <div className="modal-body font-weight-bold w3-large w3-center">
                                {parseFloat(localStorage.getItem('resultExam')).toFixed(2)}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="table table-responsive w3-panel">
                    <h5 className='w3-left w3-opacity'>{this.state.test.subjectResponse && this.state.test.subjectResponse.courseDto && this.state.test.subjectResponse.courseDto.courseName} \ {this.state.test.subjectResponse && this.state.test.subjectResponse.subjectName} \ {this.state.test.title}</h5>
                </div>
                <button type='button' onClick={this.startTimer} className="btn w3-pink mx-auto d-flex my-4 mx-4 btn-lg"> Start Exam </button>
                <div className="app">
                    <div className='stopwatch-card'>
                        {this.state.time.hours}: {this.state.time.minutes}: {this.state.time.seconds}
                    </div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    {this.state.test && this.state.test.questions && this.state.test.questions.map((item, index) => (
                        <div className="container mx-auto w-75 p-4 my-4 border" key={index}>
                            <h2>{index + 1}. {item.title}</h2>
                            <p>The form below contains three radio buttons. The first option is checked by default, and the last option is disabled:</p>
                            <div className="form-check">
                                <label className="form-check-label" htmlFor="radio1">
                                    <input type="radio" className="form-check-input" id="radio1" name={item.id} value={item.answers[0] && item.answers[0].id} onChange={this.handleInputChange} />A. {item.answers[0] && item.answers[0].title}
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label" htmlFor="radio2">
                                    <input type="radio" className="form-check-input" id="radio2" name={item.id} value={item.answers[1] && item.answers[1].id} onChange={this.handleInputChange} />B. {item.answers[1] && item.answers[1].title}
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label" htmlFor="radio2">
                                    <input type="radio" className="form-check-input" id="radio2" name={item.id} value={item.answers[2] && item.answers[2].id} onChange={this.handleInputChange} />C. {item.answers[2] && item.answers[2].title}
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label" htmlFor="radio2">
                                    <input type="radio" className="form-check-input" id="radio2" name={item.id} value={item.answers[3] && item.answers[3].id} onChange={this.handleInputChange} />D. {item.answers[3] && item.answers[3].title}
                                </label>
                            </div>
                        </div>
                    ))}
                    <div className="w3-row">
                        <div className="w3-col" style={{ width: '65%' }}><p></p></div>
                        <button type="submit" className="btn btn-success w3-col my-4 mx-4" style={{ width: '15%' }} data-toggle="modal" data-target="#myModal">Submit</button>
                        <div className="w3-col" style={{ width: '20%' }}><p></p></div>
                    </div>
                </form>
            </div >
        );
    }
}

export default withRouter(DoQuiz);

