import logo from './logo.svg';
import './App.css';
import './components/Navbar/Navbar'
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import PageContent from './components/Content/PageContent';

function App() {
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
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
