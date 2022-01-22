import React, { Component } from 'react';

class ResultExam extends React.Component {
    render() {
        return (
            <div className="container list-contrainer">
                <div className="modal" id="myModal" aria-hidden="false">
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
                </div>
                <div className="table table-responsive w3-panel">
                    <h2 className='w3-center'>Congratulations on completing your exam !</h2>
                    <div className="w3-display-container w3-center">
                        <img src={require("../../image/gift2.png")} style={{ width: '30%' }} />
                    </div>
                    <div className="w3-row">
                        <div className="w3-col" style={{ width: '40%' }}><p></p></div>
                        <button type="submit" className="btn w3-pink w3-col my-4 mx-4 btn-lg" style={{ width: '15%' }} data-toggle="modal" data-target="#myModal">View Result</button>
                        <div className="w3-col" style={{ width: '20%' }}><p></p></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ResultExam;