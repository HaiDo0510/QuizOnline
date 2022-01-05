import React, { Component } from 'react';
import About from './About';
import Advertisement from './Advertisement';
import Contact from './Contact';

class PageContent extends React.Component {
    render() {
        return (
            <div className="w3-content" style={{ maxWidth: '1100px' }}>
                {/* About Section */}
                < About />
                <hr />
                {/* Advertisement Section */}
                <Advertisement />
                <hr />
                {/* Contact Section */}
                <Contact />
                {/* End page content */}
            </div>
        );
    }
}

export default PageContent;