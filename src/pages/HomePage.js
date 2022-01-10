import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import PageContent from '../components/Content/PageContent';
import "react-toastify/dist/ReactToastify.css";

class HomePage extends React.Component {
    render() {
        return (
            <div>
                {/* Navbar (sit on top) */}
                <Navbar />
                {/* Header */}
                <Header />
                {/* Login */}
                <Login />
                {/* Register */}
                <Register />
                {/* Page content */}
                <PageContent />
            </div>
        )
    }

}

export default HomePage;
