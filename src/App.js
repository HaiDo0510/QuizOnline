import './App.css';
import './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from './pages/HomePage';
import HomePageUser from './pages/HomePageUser';
import HomePageAdmin from './pages/HomePageAdmin';
import Footer from './components/Footer/Footer';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/*' element={<ToastContainer closeButton={false} position="top-right" />} />
      </Routes>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='user/*' element={<HomePageUser />} />
        <Route path='admin/*' element={<HomePageAdmin />} />
      </Routes>
      <Routes>
        <Route path='/*' element={<Footer />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
