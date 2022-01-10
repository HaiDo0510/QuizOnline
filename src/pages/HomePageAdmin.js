import React, { Component } from 'react';
import "react-toastify/dist/ReactToastify.css";
import PageContentAdmin from '../components/Content/PageContentAdmin';
import SidebarMenuAdmin from '../components/Navbar/SidebarMenuAdmin';

class HomePageAdmin extends React.Component {
    render() {
        return (
            <div className='w3-light-grey'>
                <div>
                    <SidebarMenuAdmin />
                    {/* !PAGE CONTENT! */}
                    <div className="w3-main" style={{ marginLeft: '300px', marginTop: '43px' }}>
                        {/* Header */}
                        <PageContentAdmin />
                        {/* End page content */}
                    </div>
                </div>
            </div>
        )
    }

}

export default HomePageAdmin;
