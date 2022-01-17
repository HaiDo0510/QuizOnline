import React, { Component } from 'react';
import { api_createUser } from '../../actions/API_User';
import { withRouter } from '../../components/WithRouter';
import { api_listSubject } from '../../actions/API_Subject';
import axios from 'axios';
import * as Constant from '../../Constant'

class AddTest extends React.Component {

    constructor() {
        super();
        this.state = {
            subjects: [],
            counter: 0
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

    generateQuestion() {
        this.setState({
            counter: (this.state.counter + 1)
        });
    }

    handleInputChange = (event) => {
        // const target = event.target;
        // const value = target.value;
        // const name = target.name;
        // this.setState({
        //     [name]: value
        // });
    }

    handleSubmit = (event) => {
        event.preventDefault();
    };

    render() {
        return (
            <div className="container add-contrainer">
                <div className="table table-responsive w3-panel">
                    <h2 className='w3-center w3-monospace'>Add Test</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <label htmlFor="title" className='font-weight-bold'>Title:</label>
                            <input type="text" className="form-control" id="title" placeholder="Enter title ..." name="title" onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group row">
                            <div className="col-xs-4">
                                <label htmlFor="sel1" className='font-weight-bold'>Subject:</label>
                                <select className="form-control" id="role" name="roleId" onChange={this.handleInputChange}>
                                    {this.state.subjects.map((item, index) => (
                                        <option className='w3-panel' value={item.id}>{item.subjectName}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-xs-4 mx-4">
                                <label htmlFor="time" className='font-weight-bold'>Time (minute):</label>
                                <input type="text" className="form-control" id="time" placeholder="Enter time ..." name="time" onChange={this.handleInputChange} />
                            </div>
                        </div>
                        {Array.from(Array(this.state.counter)).map((item, index) => (
                            <div className="form-group mt-4 pt-4" key={index}>
                                <h4 className='w3-center w3-monospace float-left'>Question: {index + 1}</h4>
                                <textarea className="form-control" rows={2} id="comment" placeholder='Enter Question ...'></textarea>
                                <div className="w3-padding-24 pb-0">
                                    <div className="form-group row">
                                        <label htmlFor="time" className='font-weight-bold w3-large w3-padding-small pl-4'>A:</label>
                                        <div className="col-sm-5 pl-0 pr-4 mr-4">
                                            <input type="text" className="form-control" id="time" placeholder="Enter answer A ..." name="time" onChange={this.handleInputChange} />
                                        </div>
                                        <label htmlFor="time" className='font-weight-bold w3-large w3-padding-small pl-4'>B:</label>
                                        <div className="col-sm-5 pl-0 pr-4 mr-4">
                                            <input type="text" className="form-control" id="time" placeholder="Enter answer B ..." name="time" onChange={this.handleInputChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="time" className='font-weight-bold w3-large w3-padding-small pl-4'>C:</label>
                                        <div className="col-sm-5 pl-0 pr-4 mr-4">
                                            <input type="text" className="form-control" id="time" placeholder="Enter answer c ..." name="time" onChange={this.handleInputChange} />
                                        </div>
                                        <label htmlFor="time" className='font-weight-bold w3-large w3-padding-small pl-4'>D:</label>
                                        <div className="col-sm-5 pl-0 pr-4 mr-4">
                                            <input type="text" className="form-control" id="time" placeholder="Enter answer D ..." name="time" onChange={this.handleInputChange} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <button type="submit" className="btn btn-success">Submit</button>
                        <button type="button" className="btn btn-primary float-right" onClick={() => { this.generateQuestion() }}>Generate Question</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddTest;