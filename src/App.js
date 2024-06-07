import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginScreen from './components/Login';
import Cardapio from './components/cardapio';
import CardapioGeral from './components/cardapio-g';
import Lombo from './components/lombo';
import LocalEntrada from './components/local-entrada';
import CadastroScreen from './components/cadastro';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LoginScreen/>} />
        <Route path="/cardapiosuíno" element={<Cardapio/>} />
        <Route path="/cardapio" element={<CardapioGeral/>} />
        <Route path="/lombo" element={<Lombo/>} />
        <Route path="/local-entrada" element={<LocalEntrada/>} />
        <Route path="/cadastro" element={<CadastroScreen/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
