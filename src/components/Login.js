import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import loginAnimation from '../assets/loginAnimation.json';
import '../styles/Login.css'

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (username && password) {
      // Lógica de autenticação bem-sucedida
      alert('Login bem-sucedido! Redirecionando...');
      navigate('/inicio');
    } else {
      // Tratamento de erro ou exibição de mensagem de erro
      alert('Preencha todos os campos');
    }
  };

  return (
    <div className="login-container">
      <Lottie animationData={loginAnimation} className='loginAnimation'/>
      <div className="login-form">
        <h1 className="login-title">TeleWork Control</h1>
        <input
          className="login-input"
          type="text"
          placeholder="E-mail"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          className="login-input"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={handlePasswordChange}
        />
        <button className="login-botao" onClick={handleLogin}>
          Entrar
        </button>
        <a href="#" className="forgot-password-link">
          Esqueceu a senha?
        </a>
      </div>
    </div>
  );
}

export default Login;
