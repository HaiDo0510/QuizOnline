import React, { Component } from 'react';
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import PageContentUser from '../components/Content/PageContentUser';
import SidebarMenu from '../components/Navbar/SidebarMenu';

class HomePageUser extends React.Component {

    componentDidMount() {
        var roles = localStorage.getItem("roles");
        if (roles === 'ROLE_USER') {
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
            <div>
                <SidebarMenu />
                {/* <!-- !PAGE CONTENT! --> */}
                <PageContentUser />
            </div >
        )
    }

}

export default HomePageUser;