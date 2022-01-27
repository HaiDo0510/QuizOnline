import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SidebarMenuAdmin extends React.Component {
    render() {
        return (
            <div>
                {/* Top container */}
                <div className="w3-bar w3-top w3-cyan w3-large" style={{ zIndex: 4 }}>
                    <button className="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey" onClick={w3_open}><i className="fa fa-bars" /> &nbsp;Menu</button>
                    <Link to="/" className="w3-bar-item w3-right w3-button btn"><i className="fa fa-power-off"></i></Link>
                </div>
                {/* Sidebar/menu */}
                <nav className="w3-sidebar w3-collapse w3-white w3-animate-left" style={{ zIndex: 3, width: '300px' }} id="mySidebar"><br />
                    <div className="w3-container w3-row">
                        <div className="w3-col s4">
                            <img src={"https://www.w3schools.com/w3images/avatar2.png"} className="w3-circle w3-margin-right" style={{ width: '46px' }} />
                        </div>
                        <div className="w3-col s8 w3-bar">
                            <span>Welcome, <strong>{localStorage.getItem('username')}</strong></span><br />
                            <a href="#" className="w3-bar-item w3-button"><i className="fa fa-envelope" /></a>
                            <a href="#" className="w3-bar-item w3-button"><i className="fa fa-user" /></a>
                            <a href="#" className="w3-bar-item w3-button"><i className="fa fa-cog" /></a>
                        </div>
                    </div>
                    <hr />
                    <div className="w3-container">
                        <h5>Dashboard</h5>
                    </div>
                    <div className="w3-bar-block">
                        <a href="#" className="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black" onClick={w3_close} title="close menu"><i className="fa fa-remove fa-fw" />&nbsp; Close Menu</a>
                        <a href="#" className="w3-bar-item w3-button w3-padding w3-blue"><i className="fa fa-users fa-fw" />&nbsp; Overview</a>
                        <Link to={'/admin/listUser'} className="w3-bar-item w3-button w3-padding"><i className="fa fa-eye fa-fw" />&nbsp; User</Link>
                        <Link to={'/admin/listCourse'} className="w3-bar-item w3-button w3-padding"><i className="fa fa-users fa-fw" />&nbsp; Course</Link>
                        <Link to={'/admin/listSubject'} className="w3-bar-item w3-button w3-padding"><i className="fa fa-bullseye fa-fw" />&nbsp; Subject</Link>
                        <Link to={'/admin/listTest'} className="w3-bar-item w3-button w3-padding"><i className="fa fa-bell fa-fw" />&nbsp; Test</Link>
                        <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-bank fa-fw" />&nbsp; Games</a>
                        <Link to={'/admin/historyExam'} className="w3-bar-item w3-button w3-padding"><i className="fa fa-history fa-fw" />&nbsp; History Exam</Link>
                        <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-cog fa-fw" />&nbsp; Settings</a><br /><br />
                    </div>
                </nav>
                {/* Overlay effect when opening sidebar on small screens */}
                <div className="w3-overlay w3-hide-large w3-animate-opacity" onClick={w3_close} style={{ cursor: 'pointer' }} title="close side menu" id="myOverlay" />

            </div>
        );
    }
}

export default SidebarMenuAdmin;

const w3_open = () => {
    var mySidebar = document.getElementById("mySidebar");
    var overlayBg = document.getElementById("myOverlay");
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
        overlayBg.style.display = "none";
    } else {
        mySidebar.style.display = 'block';
        overlayBg.style.display = "block";
    }
}

const w3_close = () => {
    var mySidebar = document.getElementById("mySidebar");
    var overlayBg = document.getElementById("myOverlay");
    mySidebar.style.display = "none";
    overlayBg.style.display = "none";
}