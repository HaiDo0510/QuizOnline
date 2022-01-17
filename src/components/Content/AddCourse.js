import React, { Component } from 'react';
import { api_createCourse } from '../../actions/API_Course';
import { withRouter } from '../../components/WithRouter';

class AddCourse extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            courseName: ""
        };
        this.router = this.router.bind(this);
    };

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
        const courseDto = {
            courseName: this.state.courseName
        };
        api_createCourse(courseDto);
    };

    router(url) {
        this.props.navigate(url);
    }

    render() {
        return (
            <div className="container add-contrainer">
                <div className="table table-responsive w3-panel">
                    <h2 className='w3-center w3-monospace'>Add Course</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="courseName" className='font-weight-bold'>Course Name:</label>
                            <input type="text" className="form-control" id="courseName" placeholder="Enter Course Name ..." name="courseName" onChange={this.handleInputChange} />
                        </div>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(AddCourse);