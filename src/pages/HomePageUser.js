import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import DoQuiz from '../components/Content/DoQuiz';
import PageContentUser from '../components/Content/PageContentUser';
import SidebarMenu from '../components/Navbar/SidebarMenu';
import { Link } from 'react-router-dom';
import ListTest from '../components/Content/ListTest';

class HomePageUser extends React.Component {

    componentDidMount() {
        let roles = localStorage.getItem("roles");
        if (roles === 'ROLE_USER') {
            toast.success('Hello ' + localStorage.getItem('username'));
        } else {
            window.location.href = '/';
        }
    }

    render() {
        return (
            <div>
                <SidebarMenu />
                {/* <!-- !PAGE CONTENT! --> */}
                <div className="w3-main" style={{ marginLeft: '250px' }}>
                    <div className="w3-hide-large" style={{ marginTop: '83px' }} />
                    <header className="w3-xlarge">
                        <div className="w3-bar w3-white w3-padding w3-card" style={{ letterSpacing: '2px' }}>
                            <Link to={'/user'} className="w3-bar-item w3-button btn">Quiz Online</Link>
                            {/* Right-sided navbar links. Hide them on small screens */}
                            <div className="w3-hide-small">
                                <a href="#" className="w3-bar-item w3-button btn">Basic</a>
                                <a href="#" className="w3-bar-item w3-button btn">Advance</a>
                                <a href="#" className="w3-bar-item w3-button btn">History Exam</a>
                                <Link to="/" className="w3-bar-item w3-button btn btn-info w3-right">Logout</Link>
                            </div>
                        </div>
                    </header>
                    <Routes>
                        <Route path='' element={<PageContentUser />} />
                        <Route path='doQuiz' element={<DoQuiz />} />
                        <Route path='listTest' element={<ListTest/>}/>
                    </Routes>
                </div>
            </div >
        )
    }

}

export default HomePageUser;