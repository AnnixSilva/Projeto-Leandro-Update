import React, { useState } from 'react';
import './LoginScreen.css'; // Certifique-se de criar um arquivo CSS correspondente

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implemente a lógica de login aqui
    console.log(email, password);
  };

  return (
    <div className="login-container">
      <h1>Log in</h1>
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
      <a href="#forgot">Esqueceu sua senha?</a>
      <button onClick={handleLogin}>Entrar</button>
      <p>Ou continue com</p>
      <button className="social-login facebook">Entrar com o Facebook</button>
      <button className="social-login google">Entrar com o Google</button>
    </div>
  );
}

export default LoginScreen;
