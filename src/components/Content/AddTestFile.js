import React, { Component } from 'react';
import { api_createUser } from '../../actions/API_User';
import { withRouter } from '../../components/WithRouter';
import { api_listSubject } from '../../actions/API_Subject';
import axios from 'axios';
import * as Constant from '../../Constant'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

class AddTestFile extends React.Component {

  constructor() {
    super();
    this.state = {
      file: ""
    };
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.files[0];
    this.setState({
      file: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", this.state.file);
    // console.log(this.state.file);
    axios({
      method: 'POST',
      headers: Constant.HEADER_API_TOKEN,
      url: Constant.API_LISTTEST + '/excel/1',
      data: formData
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
          <h2 className='w3-center w3-monospace'>Add Test By File</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label htmlFor="title" className='font-weight-bold'>File:</label>
              <div className="custom-file">
                <input type="file" className="custom-file-input" id="customFile" onChange={this.handleInputChange} />
                <label className="custom-file-label" htmlFor="customFile" >Choose file</label>
              </div>
            </div>

            <button type="submit" className="btn btn-success">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddTestFile;