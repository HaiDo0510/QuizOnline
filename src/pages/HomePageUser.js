import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import DoQuiz from '../components/Content/DoQuiz';
import PageContentUser from '../components/Content/PageContentUser';
import SidebarMenu from '../components/Navbar/SidebarMenu';
import { Link } from 'react-router-dom';
import ListTest from '../components/Content/ListTest';
import ResultExam from '../components/Content/ResultExam';
import ListGame from '../components/Content/ListGame';
import Game_Flappy from '../components/Content/Game_Flappy';
import Game_Dino from '../components/Content/Game_Dino';
import Game_GTA from '../components/Content/Game_GTA';
import HistoryExam from '../components/Content/HistoryExam';
import Game_Bia from '../components/Content/Game_Bia';
import HistoryExamAVG from '../components/Content/HistoryExamAVG';
import CheckQuiz from '../components/Content/CheckQuiz';

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
                                <Link to="/user/listGame" className="w3-bar-item w3-button btn">Game</Link>
                                <Link to="/user/historyExamAVG" className="w3-bar-item w3-button btn">History Exam</Link>
                                <Link to="/" className="w3-bar-item w3-button btn btn-info w3-right">Logout</Link>
                                <a href="#" className="w3-bar-item w3-button btn w3-right font-weight-bold">{localStorage.getItem("username")}</a>
                            </div>
                        </div>
                    </header>
                    <Routes>
                        <Route path='' element={<PageContentUser />} />
                        <Route path='doQuiz' element={<DoQuiz />} />
                        <Route path='checkQuiz' element={<CheckQuiz />} />
                        <Route path='listTest' element={<ListTest />} />
                        <Route path='historyExam' element={<HistoryExam />} />
                        <Route path='historyExamAVG' element={<HistoryExamAVG />} />
                        <Route path='resultExam' element={<ResultExam />} />
                        <Route path='listGame' element={<ListGame />} />
                        <Route path='GameFlappyBird' element={<Game_Flappy />} />
                        <Route path='GameDino' element={<Game_Dino />} />
                        <Route path='GameGTA' element={<Game_GTA />} />
                        <Route path='GameBia' element={<Game_Bia />} />
                    </Routes>
                </div>
            </div >
        )
    }

}

export default HomePageUser;