import React from 'react';
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import ListUser from '../components/Content/ListUser';
import PageContentAdmin from '../components/Content/PageContentAdmin';
import SidebarMenuAdmin from '../components/Navbar/SidebarMenuAdmin';
import { Routes, Route } from 'react-router-dom';
import AddUser from '../components/Content/AddUser';
import ListCourse from '../components/Content/ListCourse';
import AddSubject from '../components/Content/AddSubject';
import ListSubject from '../components/Content/ListSubject';
import AddCourse from '../components/Content/AddCourse';
import UpdateUser from '../components/Content/UpdateUser';
import ListTestAdmin from '../components/Content/ListTestAdmin';
import AddTest from '../components/Content/AddTest';
import ListHistoryExam from '../components/Content/ListHistoryExam';

class HomePageAdmin extends React.Component {

    componentDidMount() {
        var roles = localStorage.getItem("roles");
        var message = 'Hello ' + localStorage.getItem('username');
        if (roles === 'ROLE_ADMIN') {
            toast.success(message);
        } else {
            window.location.href = '/';
        }
    }

    render() {
        return (
            <div className='w3-light-grey'>
                <div>
                    <SidebarMenuAdmin />
                    {/* !PAGE CONTENT! */}
                    <div className="w3-main" style={{ marginLeft: '300px', marginTop: '43px' }}>
                        <Routes>
                            <Route path='' element={<PageContentAdmin />} />
                            <Route path='listUser/*' element={<ListUser />} />
                            <Route path='addUser/*' element={<AddUser />} />
                            <Route path='updateUser/*' element={<UpdateUser />} />
                            <Route path='listCourse/*' element={<ListCourse />} />
                            <Route path='addCourse/*' element={<AddCourse />} />
                            <Route path='listSubject/*' element={<ListSubject />} />
                            <Route path='addSubject/*' element={<AddSubject />} />
                            <Route path='listTest/*' element={<ListTestAdmin />} />
                            <Route path='addTest/*' element={<AddTest />} />
                            <Route path='historyExam/*' element={<ListHistoryExam />} />
                        </Routes>
                    </div>
                </div>
            </div>
        )
    }

}

export default HomePageAdmin;
