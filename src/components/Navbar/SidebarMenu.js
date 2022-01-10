import React, { Component } from 'react';

class SidebarMenu extends React.Component {

    render() {
        return (
            <div>
                {/* Sidebar/menu */}
                <nav className="w3-sidebar w3-bar-block w3-amber w3-collapse w3-top" style={{ zIndex: 3, width: '250px' }} id="mySidebar">
                    <div className="w3-container w3-display-container w3-padding-16">
                        <i onClick={w3_close} className="fa fa-remove w3-hide-large w3-button w3-display-topright" />
                        <h3 className="w3-wide w3-cursive w3-center"><i className="fa fa-home"></i><b> KaHoot</b></h3>
                    </div>
                    <div className="w3-padding-32 w3-large w3-text-black" style={{ fontWeight: 'bold' }}>
                        <a onClick={() => { myAccFunc('Java') }} className="w3-button w3-hover-white w3-block w3-deep-orange w3-left-align" id="myBtn">
                            <i className="fa fa-caret-right w3-margin-right" />Java
                        </a>
                        <div id='Java' className="w3-bar-block w3-hide w3-padding-large w3-medium">
                            <a href="#" className="w3-bar-item w3-button w3-hover-white">Java Core</a>
                            <a href="#" className="w3-bar-item w3-button w3-hover-white">Thread</a>
                            <a href="#" className="w3-bar-item w3-button w3-hover-white">File IO</a>
                            <a href="#" className="w3-bar-item w3-button w3-hover-white">For/While</a>
                        </div>
                        <a onClick={() => { myAccFunc('c++') }} className="w3-button w3-block w3-deep-orange w3-left-align" id="myBtn">
                            <i className="fa fa-caret-right w3-margin-right" />C++
                        </a>
                        <div id="c++" className="w3-bar-block w3-hide w3-padding-large w3-medium">
                            <a href="#" className="w3-bar-item w3-button">Skinny</a>
                            <a href="#" className="w3-bar-item w3-button">Relaxed</a>
                            <a href="#" className="w3-bar-item w3-button">Bootcut</a>
                            <a href="#" className="w3-bar-item w3-button">Straight</a>
                        </div>
                        <a onClick={() => { myAccFunc('html') }} className="w3-button w3-block w3-deep-orange w3-left-align" id="myBtn">
                            <i className="fa fa-caret-right w3-margin-right" />Html
                        </a>
                        <div id="html" className="w3-bar-block w3-hide w3-padding-large w3-medium">
                            <a href="#" className="w3-bar-item w3-button">Skinny</a>
                            <a href="#" className="w3-bar-item w3-button">Relaxed</a>
                            <a href="#" className="w3-bar-item w3-button">Bootcut</a>
                            <a href="#" className="w3-bar-item w3-button">Straight</a>
                        </div>
                    </div>
                </nav>
                {/* Top menu on small screens */}
                <header className="w3-bar w3-top w3-hide-large w3-amber w3-xlarge">
                    <div className="w3-bar-item w3-padding-24 w3-wide">LOGO</div>
                    <a href="#" className="w3-bar-item w3-button w3-padding-24 w3-right" onClick={w3_open}><i className="fa fa-bars" /></a>
                </header>
                {/* Overlay effect when opening sidebar on small screens */}
                <div className="w3-overlay w3-hide-large" onClick={w3_close} style={{ cursor: 'pointer' }} title="close side menu" id="myOverlay" />

            </div>
        );
    }
}

export default SidebarMenu;

const myAccFunc = (type) => {
    var x = document.getElementById(type);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

const w3_open = () => {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

const w3_close = () => {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}