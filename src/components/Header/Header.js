import React, { Component } from 'react';

class Header extends React.Component {
    render() {
        return (
            <header className="w3-display-container w3-content w3-wide" style={{ maxWidth: '1600px', minWidth: '500px' }} id="home">
                <img className="w3-image" src={require("../../image/logo3.jpg")} alt="Hamburger Catering" width={1400} height={500} />
                <div className="w3-display-bottomleft w3-padding-large w3-opacity">
                    <h1 className="w3-xxlarge">Le Catering</h1>
                </div>
            </header>
        );
    }
}

export default Header;