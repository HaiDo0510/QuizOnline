import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListGame extends React.Component {
    render() {
        return (
            <div>
                <div>
                    {/* Product grid */}
                    <div className='w3-margin-top'></div>
                    <h3 className="w3-wide w3-cursive w3-center pb-4 pt-4 mb-4 mt-4 bg-info text-center mx-0"><i className="fas fa-gamepad" /><b> Games</b></h3>
                    <div className="w3-row pt-2">
                        <div className="w3-col l3 s6">
                            <div className="w3-container">
                                <div className="w3-display-container">
                                    <img src={require("../../image/BanMa_P11.png")} style={{ width: '100%' }} />
                                    <div className="w3-display-middle w3-display-hover">
                                        <button className="w3-button w3-orange font-weight-bold">Play <i className="fas fa-gamepad" /></button>
                                    </div>
                                </div>
                                <p>Ghost<br /><b>$109.99</b></p>
                            </div>
                            <div className="w3-container">
                                <div className="w3-display-container">
                                    <img src={require("../../image/DarkCar_P1.png")} style={{ width: '100%' }} />
                                    <span className="w3-tag w3-display-topleft bg-danger">Hot</span>
                                    <div className="w3-display-middle w3-display-hover">
                                        <button className="w3-button w3-orange font-weight-bold">Play <i className="fas fa-gamepad" /></button>
                                    </div>
                                </div>
                                <p>DarkCar<br /><b>$36.99</b></p>
                            </div>
                        </div>
                        <div className="w3-col l3 s6">
                            <div className="w3-container">
                                <div className="w3-display-container">
                                    <img src={require("../../image/Dinosaur.png")} style={{ width: '100%' }} />
                                    <div className="w3-display-middle w3-display-hover">
                                        <Link to={'/user/GameDino'} className="w3-button w3-orange font-weight-bold">Play <i className="fas fa-gamepad" /></Link>
                                    </div>
                                </div>
                                <p>Dinosaur<br /><b>$20.00</b></p>
                            </div>
                            <div className="w3-container">
                                <div className="w3-display-container">
                                    <img src={require("../../image/GTA_P1.png")} style={{ width: '100%' }} />
                                    <span className="w3-tag w3-display-topleft bg-danger">Hot</span>
                                    <div className="w3-display-middle w3-display-hover">
                                        <Link to={'/user/GameGTA'} className="w3-button w3-orange font-weight-bold">Play <i className="fas fa-gamepad" /></Link>
                                    </div>
                                </div>
                                <p>GTA5 Vice City<br /><b>$10.99</b></p>
                            </div>
                        </div>
                        <div className="w3-col l3 s6">
                            <div className="w3-container">
                                <div className="w3-display-container">
                                    <img src={require("../../image/Logo_FlappyBird.png")} style={{ width: '100%' }} />
                                    <div className="w3-display-middle w3-display-hover">
                                        <Link to={'/user/GameFlappyBird'} className="w3-button w3-orange font-weight-bold">Play <i className="fas fa-gamepad" /></Link>
                                    </div>
                                </div>
                                <p>Flappy Bird<br /><b>$78.99</b></p>
                            </div>
                            <div className="w3-container">
                                <div className="w3-display-container">
                                    <img src={require("../../image/ShootFly1.png")} style={{ width: '100%' }} />
                                    <div className="w3-display-middle w3-display-hover">
                                        <button className="w3-button w3-orange font-weight-bold">Play <i className="fas fa-gamepad" /></button>
                                    </div>
                                </div>
                                <p>Space Shooter<br /><b>$19.99</b></p>
                            </div>
                        </div>
                        <div className="w3-col l3 s6">
                            <div className="w3-container">
                                <div className="w3-display-container">
                                    <img src={require("../../image/Logo_MeoDuoiChuot.png")} style={{ width: '100%' }} />
                                    <span className="w3-tag w3-display-topleft bg-danger">Hot</span>
                                    <div className="w3-display-middle w3-display-hover">
                                        <button className="w3-button w3-orange font-weight-bold">Play <i className="fas fa-gamepad" /></button>
                                    </div>
                                </div>
                                <p>Cat And Mouse<br /><b>$19.99</b></p>
                            </div>
                            <div className="w3-container">
                                <div className="w3-display-container">
                                    <img src={require("../../image/Logo_BanBia.png")} style={{ width: '100%' }} />
                                    <div className="w3-display-middle w3-display-hover">
                                        <Link to={'/user/GameBia'} className="w3-button w3-orange font-weight-bold">Play <i className="fas fa-gamepad" /></Link>
                                    </div>
                                </div>
                                <p>Pointer<br /><b>$19.99</b></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default ListGame;