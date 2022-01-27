import React, { Component } from 'react';
import { api_createUser } from '../../actions/API_User';
import { withRouter } from '../../components/WithRouter';
import { api_listSubject } from '../../actions/API_Subject';
import axios from 'axios';
import * as Constant from '../../Constant'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

class AddTest extends React.Component {

  constructor() {
    super();
    this.state = {
      subjects: [],
      testFull: {
        title: "",
        duration: "",
        subjectId: "",
        listQuestionFullDtos: []
      },
      question: [],
      correct: [],
      level: [],
      ansA: [],
      ansB: [],
      ansC: [],
      ansD: [],
      counter: 0
    };
  };

  componentDidMount() {
    api_listSubject().then(data => {
      this.setState({
        subjects: data
      });
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
    const target = event.target;
    const value = target.value;
    const name = target.name;
    if (name == "title") {
      const title = { ...this.state.testFull, title: value };
      this.setState({ testFull: title });
    }
    if (name == "subjectId") {
      const subjectId = { ...this.state.testFull, subjectId: value };
      this.setState({ testFull: subjectId });
    }
    if (name == "duration") {
      const duration = { ...this.state.testFull, duration: value };
      this.setState({ testFull: duration });
    }
  }

  handleChangeQuestion = (event, index) => {
    const arr = [...this.state.question];
    arr[index] = event.target.value
    this.setState({ question: arr });
  }

  handleChangeCorrect = (event, index) => {
    const arr = [...this.state.correct];
    arr[index] = event.target.value
    this.setState({ correct: arr });
  }

  handleChangeLevel = (event, index) => {
    const arr = [...this.state.level];
    arr[index] = event.target.value
    this.setState({ level: arr });
  }

  handleChangeA = (event, index) => {
    const arr = [...this.state.ansA];
    arr[index] = event.target.value
    this.setState({ ansA: arr });
  }

  handleChangeB = (event, index) => {
    const arr = [...this.state.ansB];
    arr[index] = event.target.value
    this.setState({ ansB: arr });
  }

  handleChangeC = (event, index) => {
    const arr = [...this.state.ansC];
    arr[index] = event.target.value
    this.setState({ ansC: arr });
  }

  handleChangeD = (event, index) => {
    const arr = [...this.state.ansD];
    arr[index] = event.target.value
    this.setState({ ansD: arr });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    var listQuestionFullDtos = [];
    for (let i = 0; i < this.state.counter; i++) {
      let listQuestionFullDto = {
        quesitonTitle: this.state.question[i],
        level: this.state.level[i],
        listAnswerDtos: [
          {
            answerText: this.state.ansA[i],
            isCorrect: "true"
          },
          {
            answerText: this.state.ansB[i],
            isCorrect: "false"
          },
          {
            answerText: this.state.ansC[i],
            isCorrect: "false"
          },
          {
            answerText: this.state.ansD[i],
            isCorrect: "false"
          },
        ]
      };
      listQuestionFullDtos.push(listQuestionFullDto);
    }
    const testFull = {
      title: this.state.testFull.title,
      duration: this.state.testFull.duration,
      subjectId: this.state.testFull.subjectId,
      listQuestionFullDtos: listQuestionFullDtos
    };
    axios({
      method: 'POST',
      headers: Constant.HEADER_API_TOKEN,
      url: Constant.API_LISTTEST+'/add',
      data: testFull
    }).then(res => {
      toast.success('Add Test Success!');
    }).catch((error) => {
      toast.warning(error.response.data.message);
    });
  };

  render() {
    return (
      <div className="container add-contrainer">
        <div className="table table-responsive w3-panel">
          <h2 className='w3-center w3-monospace'>Add Test</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label htmlFor="title" className='font-weight-bold'>Title:</label>
              <input type="text" className="form-control" id="title"
                placeholder="Enter title ..." name="title"
                onChange={this.handleInputChange} />
            </div>
            <div className="form-group row">
              <div className="col-xs-4">
                <label htmlFor="sel1" className='font-weight-bold'>Subject:</label>
                <select className="form-control" id="subjectId" name="subjectId" onChange={this.handleInputChange}>
                  <option className='w3-panel' value={""}>--</option>
                  {this.state.subjects.map((item, index) => (
                    <option className='w3-panel' value={item.id} key={index}>{item.subjectName}</option>
                  ))}
                </select>
              </div>
              <div className="col-xs-4 mx-4">
                <label htmlFor="time" className='font-weight-bold'>Time (minute):</label>
                <input type="text" className="form-control" id="time" placeholder="Enter time ..."
                  name="duration" onChange={this.handleInputChange} />
              </div>
            </div>
            {Array.from(Array(this.state.counter)).map((item, index) => (
              <div className="form-group mt-4 pt-4" key={index}>
                <h4 className='w3-center w3-monospace float-left'>Question: {index + 1}</h4>
                <textarea className="form-control" rows={2} id="comment" placeholder='Enter Question ...'
                  name={'question' + (index + 1)} onChange={(event) => this.handleChangeQuestion(event, index)}></textarea>
                <div className="w3-padding-24 pb-0">
                  <div className="form-group row">
                    <label htmlFor="time" className='font-weight-bold w3-large w3-padding-small pl-4'>Correct Answer:</label>
                    <div className="col-sm-1 mr-4 pl-0">
                      <select className="form-control" id="sel1"
                        name={'correctAnswer' + (index + 1)}
                        onChange={(event) => this.handleChangeCorrect(event, index)}>
                        <option value={''}>--</option>
                        <option value={'A'}>A</option>
                        <option value={'B'}>B</option>
                        <option value={'C'}>C</option>
                        <option value={'D'}>D</option>
                      </select>
                    </div>
                    <label htmlFor="time" className='font-weight-bold w3-large w3-padding-small pl-4'>Level:</label>
                    <div className="col-sm-2 pl-0 pr-4 mr-4">
                      <select className="form-control" id="level" name={'level' + (index + 1)}
                        onChange={(event) => this.handleChangeLevel(event, index)}>
                        <option value={''}>--</option>
                        <option value={'0'}>Basic</option>
                        <option value={'1'}>Advance</option>
                        <option value={'2'}>Intensive</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="time" className='font-weight-bold w3-large w3-padding-small pl-4'>A:</label>
                    <div className="col-sm-5 pl-0 pr-4 mr-4">
                      <input type="text" className="form-control" id="time" placeholder="Enter answer A ..."
                        name={'A' + (index + 1)} onChange={(event) => this.handleChangeA(event, index)} />
                    </div>
                    <label htmlFor="time" className='font-weight-bold w3-large w3-padding-small pl-4'>B:</label>
                    <div className="col-sm-5 pl-0 pr-4 mr-4">
                      <input type="text" className="form-control" id="time" placeholder="Enter answer B ..."
                        name={'B' + (index + 1)} onChange={(event) => this.handleChangeB(event, index)} />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="time" className='font-weight-bold w3-large w3-padding-small pl-4'>C:</label>
                    <div className="col-sm-5 pl-0 pr-4 mr-4">
                      <input type="text" className="form-control" id="time" placeholder="Enter answer c ..."
                        name={'C' + (index + 1)} onChange={(event) => this.handleChangeC(event, index)} />
                    </div>
                    <label htmlFor="time" className='font-weight-bold w3-large w3-padding-small pl-4'>D:</label>
                    <div className="col-sm-5 pl-0 pr-4 mr-4">
                      <input type="text" className="form-control" id="time" placeholder="Enter answer D ..."
                        name={'D' + (index + 1)} onChange={(event) => this.handleChangeD(event, index)} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <button type="submit" className="btn btn-success">Submit</button>
            <button type="button" className="btn btn-primary float-right"
              onClick={() => { this.generateQuestion() }}>Generate Question</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddTest;