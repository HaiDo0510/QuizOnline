import React, { Component } from 'react';

class DoQuiz extends React.Component {
    constructor() {
        super();
        this.state = {
            test: [
                {
                    id: 1,
                    title: "Đâu không phải là một kiểu dữ liệu nguyên thủy trong Java",
                    answer: [
                        {
                            id: 1,
                            title: "Double"
                        },
                        {
                            id: 2,
                            title: "Integer"
                        },
                        {
                            id: 3,
                            title: "Long"
                        }, {
                            id: 4,
                            title: "char"
                        }
                    ]
                },
                {
                    id: 2,
                    title: "Giá trị mặc định của một biến kiểu char",
                    answer: [
                        {
                            id: 1,
                            title: "\"\""
                        },
                        {
                            id: 2,
                            title: "null"
                        },
                        {
                            id: 3,
                            title: "object"
                        }, {
                            id: 4,
                            title: "nuxxxx"
                        }
                    ]
                }
            ],
            time: {
                hours: '0'.toString().padStart(2, '0'),
                minutes: '0'.toString().padStart(2, '0'),
                seconds: '0'.toString().padStart(2, '0'),
                milliseconds: 0,
            },
            duration: 5 * 60 * 1000,
            timer: null
        };
        this.startTimer = this.start.bind(this);
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

    componentDidMount() { }

    start() {
        if (!this.state.timer) {
            this.state.startTime = Date.now();
            console.log('start', this.state.startTime);
            this.timer = window.setInterval(() => this.run(), 10);
        }
    }

    run() {
        const diff = Date.now() - this.state.startTime;
        console.log('diff', this.state.startTime);
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
            console.log('OK');
            window.clearTimeout(this.timer);
            this.timer = null;
        }
    }
    render() {
        return (
            <div>
                <div></div>
                <button type='button' onClick={this.startTimer} className="btn w3-pink mx-auto d-flex my-4 mx-4 btn-lg"> Start Exam </button>
                <div className="app">
                    <div className='stopwatch-card'>
                        {this.state.time.hours}: {this.state.time.minutes}: {this.state.time.seconds}
                    </div>
                </div>
                <form>
                    {this.state.test.map((item, index) => (
                        <div className="container mx-auto w-75 p-4 my-4 border" key={index}>
                            <h2>{index+1}. {item.title}</h2>
                            <p>The form below contains three radio buttons. The first option is checked by default, and the last option is disabled:</p>
                            <div className="form-check">
                                <label className="form-check-label" htmlFor="radio1">
                                    <input type="radio" className="form-check-input" id="radio1" name="optradio" defaultValue="option1" defaultChecked />A. {item.answer[0].title}
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label" htmlFor="radio2">
                                    <input type="radio" className="form-check-input" id="radio2" name="optradio" defaultValue="option2" />B. {item.answer[1].title}
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label" htmlFor="radio2">
                                    <input type="radio" className="form-check-input" id="radio2" name="optradio" defaultValue="option2" />C. {item.answer[2].title}
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label" htmlFor="radio2">
                                    <input type="radio" className="form-check-input" id="radio2" name="optradio" defaultValue="option2" />D. {item.answer[3].title}
                                </label>
                            </div>
                        </div>
                    ))}
                    <div className="w3-row">
                        <div className="w3-col" style={{ width: '65%' }}><p></p></div>
                        <button type="submit" className="btn btn-success w3-col my-4 mx-4" style={{ width: '15%' }}>Submit</button>
                        <div className="w3-col" style={{ width: '20%' }}><p></p></div>
                    </div>
                </form>
            </div >
        );
    }
}

export default DoQuiz;

