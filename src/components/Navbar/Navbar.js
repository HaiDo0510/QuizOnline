import React, { Component } from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <div className="w3-top">
                <div className="w3-bar w3-white w3-padding w3-card" style={{ letterSpacing: '4px' }}>
                    <a href="#home" className="w3-bar-item w3-button btn">Quiz Online</a>
                    {/* Right-sided navbar links. Hide them on small screens */}
                    <div className="w3-right w3-hide-small">
                        <a href="#about" className="w3-bar-item w3-button btn">About</a>
                        <a href="#menu" className="w3-bar-item w3-button btn">Menu</a>
                        <a href="#contact" className="w3-bar-item w3-button btn">Contact</a>
                        <a href="#" className="w3-bar-item w3-button btn btn-info" data-toggle="modal" data-target="#loginModal">Login</a>
                        <a href="#" className="w3-bar-item w3-button btn" data-toggle="modal" data-target="#registerModal">Register</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;