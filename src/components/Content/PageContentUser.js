import React, { Component } from 'react';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

class PageContentUser extends React.Component {
    render() {
        return (
            <div>
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