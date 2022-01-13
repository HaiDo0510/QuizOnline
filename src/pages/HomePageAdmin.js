import React, { Component } from 'react';
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import PageContentAdmin from '../components/Content/PageContentAdmin';
import SidebarMenuAdmin from '../components/Navbar/SidebarMenuAdmin';

class HomePageAdmin extends React.Component {

    componentDidMount() {
        var roles = localStorage.getItem("roles");
        if (roles === 'ROLE_ADMIN') {
            toast.success("Đăng nhập thành công");
            // console.log(localStorage.getItem("data"));
            // console.log(localStorage.getItem("email"));
            // console.log(localStorage.getItem("accessToken"));
            // console.log(localStorage.getItem("roles"));
        } else {
            // window.location.href = '/';
        }
    }

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
