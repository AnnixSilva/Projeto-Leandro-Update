import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginScreen from './components/Login';
import Cardapio from './components/cardapio';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LoginScreen/>} />
        <Route path="/cardapio" element={<Cardapio/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
