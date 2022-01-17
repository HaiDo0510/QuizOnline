import React, { Component } from 'react';
import { api_createSubject } from '../../actions/API_Subject';
import { api_listCourse } from '../../actions/API_Course';
import { withRouter } from '../../components/WithRouter';

class AddSubject extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            subjectName: "",
            courseId: "",
            courses: []
        };
        this.router = this.router.bind(this);
    };

    componentDidMount() {
        api_listCourse().then(data => {
            this.setState({
                courses: data
            });
        }).catch((error) => {
            console.log('Error', error);
        });
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const subjectDto = {
            subjectName: this.state.subjectName,
            courseId: this.state.courseId
        };
        console.log('test courseid', this.state.courseId);
        api_createSubject(subjectDto);
    };

    router(url) {
        this.props.navigate(url);
    }


    render() {
        return (
            <div className="container add-contrainer">
                <div className="table table-responsive w3-panel">
                    <h2 className='w3-center w3-monospace'>Add Subject</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="subjectName" className='font-weight-bold'>Subject Name:</label>
                            <input type="text" className="form-control" id="subjectName" placeholder="Enter subjectName" name="subjectName" onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="sel1" className='font-weight-bold'>Course Name:</label>
                            <select className="form-control" id="courseId" name="courseId" onChange={this.handleInputChange}>
                                <option className='w3-panel'>--</option>
                                {this.state.courses.map((item, index) => (
                                    <option key={index} className='w3-panel' value={item.id}>{item.courseName}</option>
                                ))}
                            </select>
                        </div>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(AddSubject);