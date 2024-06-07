import React, { useState } from 'react';
import './CadastroScreen.css'; // Certifique-se de criar um arquivo CSS correspondente

function CadastroScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleRegister = () => {
    // Implemente a lógica de cadastro aqui
    if (password === confirmPassword) {
      console.log('Nome:', nome, 'Email:', email, 'Senha:', password, 'Data de Nascimento:', birthdate, 'Lembre-me:', rememberMe);
    } else {
      console.log('As senhas não coincidem.');
    }
  };

  return (
    <div className='euphoria'>
      <div className="cadastro-container">
        <h1>Cadastro</h1>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirme a Senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <input
          type="date"
          placeholder="Data de Nascimento"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        <label className="remember-me">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <span className="remember-me">Lembre-me desse dispositivo</span>
        </label>
        <button className='cadastro-botao' onClick={handleRegister}>Cadastrar</button>
        <a href="#forgot" className="forgot-password">Esqueceu a senha?</a>
        <p>Ou continue com</p>
        <button className="social-register facebook">Cadastrar com o Facebook</button>
        <button className="social-register google">Cadastrar com o Google</button>
      </div>
    </div>
  );
}

export default CadastroScreen;
