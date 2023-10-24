import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import loginAnimation from '../assets/loginAnimation.json';
import '../styles/Login.css';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (username && password) {
      // Lógica de autenticação bem-sucedida
      navigate('/inicio');
    } else {
      // Tratamento de erro ou exibição de mensagem de erro
      setErrorMessage('Preencha todos os campos');
    }
  };

  return (
    <div className="login-container">
      <Lottie animationData={loginAnimation} className="loginAnimation" />
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
        <button type="button" className="login-botao" onClick={handleLogin}>
          Entrar
        </button>
        <p className="error-message">{errorMessage}</p>
        <button type="button" className="forgot-password-link">
          Esqueceu a senha?
        </button>
      </div>
    </div>
  );
}

export default Login;
