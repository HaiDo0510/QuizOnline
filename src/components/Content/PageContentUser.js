import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

class PageContentUser extends React.Component {
    render() {
        return (
            <div className="w3-main" style={{ marginLeft: '250px' }}>
                {/* <div classname="w3-hide-large"></div> */}
                <div className="w3-hide-large" style={{ marginTop: '83px' }} />
                <header className="w3-xlarge">
                    <div className="w3-bar w3-white w3-padding w3-card" style={{ letterSpacing: '2px' }}>
                        <a href="#" className="w3-bar-item w3-button btn">Quiz Online</a>
                        {/* Right-sided navbar links. Hide them on small screens */}
                        <div className="w3-hide-small">
                            <a href="#" className="w3-bar-item w3-button btn">Basic</a>
                            <a href="#" className="w3-bar-item w3-button btn">Advance</a>
                            <a href="#" className="w3-bar-item w3-button btn">History Exam</a>
                            <Link to="/" className="w3-bar-item w3-button btn btn-info w3-right">Logout</Link>
                        </div>
                    </div>
                </header>
                <div>
                    {/* Product grid */}
                    <div className='w3-margin-top w3-padding-32'></div>
                    <div className="w3-container w3-text-grey" id="jeans">
                        <p>8 items</p>
                    </div>
                    <div className="w3-row w3-grayscale">
                        <div className="w3-col l3 s6">
                            <div className="w3-container">
                                <img src={require("../../image/logo1.jpg")} style={{ width: '100%' }} />
                                <p>Ripped Skinny Jeans<br /><b>$24.99</b></p>
                            </div>
                            <div className="w3-container">
                                <img src={require("../../image/logo1.jpg")} style={{ width: '100%' }} />
                                <p>Mega Ripped Jeans<br /><b>$19.99</b></p>
                            </div>
                        </div>
                        <div className="w3-col l3 s6">
                            <div className="w3-container">
                                <div className="w3-display-container">
                                    <img src={require("../../image/logo1.jpg")} style={{ width: '100%' }} />
                                    <span className="w3-tag w3-display-topleft">New</span>
                                    <div className="w3-display-middle w3-display-hover">
                                        <button className="w3-button w3-black">Buy now <i className="fa fa-shopping-cart" /></button>
                                    </div>
                                </div>
                                <p>Mega Ripped Jeans<br /><b>$19.99</b></p>
                            </div>
                            <div className="w3-container">
                                <img src={require("../../image/logo1.jpg")} style={{ width: '100%' }} />
                                <p>Washed Skinny Jeans<br /><b>$20.50</b></p>
                            </div>
                        </div>
                        <div className="w3-col l3 s6">
                            <div className="w3-container">
                                <img src={require("../../image/logo1.jpg")} style={{ width: '100%' }} />
                                <p>Washed Skinny Jeans<br /><b>$20.50</b></p>
                            </div>
                            <div className="w3-container">
                                <div className="w3-display-container">
                                    <img src={require("../../image/logo1.jpg")} style={{ width: '100%' }} />
                                    <span className="w3-tag w3-display-topleft">Sale</span>
                                    <div className="w3-display-middle w3-display-hover">
                                        <button className="w3-button w3-black">Buy now <i className="fa fa-shopping-cart" /></button>
                                    </div>
                                </div>
                                <p>Vintage Skinny Jeans<br /><b className="w3-text-red">$14.99</b></p>
                            </div>
                        </div>
                        <div className="w3-col l3 s6">
                            <div className="w3-container">
                                <img src={require("../../image/logo1.jpg")} style={{ width: '100%' }} />
                                <p>Vintage Skinny Jeans<br /><b>$14.99</b></p>
                            </div>
                            <div className="w3-container">
                                <img src={require("../../image/logo1.jpg")} style={{ width: '100%' }} />
                                <p>Ripped Skinny Jeans<br /><b>$24.99</b></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default PageContentUser;