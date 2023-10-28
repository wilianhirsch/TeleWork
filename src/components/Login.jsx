import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import axios from 'axios';
import PropTypes from 'prop-types';
import loginAnimation from '../assets/loginAnimation.json';
import '../styles/Login.css';

function Login({ onAuthentication }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAuthentication = (isAuthenticated) => {
    onAuthentication(isAuthenticated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://wilianhirsch.pythonanywhere.com/api/login', { email, senha });
      if (response.status === 200) {
        const resposta = response.data;
        handleAuthentication(true);
        localStorage.setItem('token', resposta.token);
        navigate('/inicio');
      } else {
        setErrorMessage('Falha na autenticação.');
      }
    } catch (error) {
      setErrorMessage('Falha na autenticação.');
    }
  };

  return (
    <div className="login-container">
      <Lottie animationData={loginAnimation} className="loginAnimation" />
      <div className="login-form">
        <h1 className="login-title">TeleWork Control</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="login-input"
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="login-input"
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <div className="botoes-login">
            <button type="submit" className="login-botao">Entrar</button>
            <button type="button" className="forgot-password-link">
              Esqueceu a senha?
            </button>
          </div>
          <p className="error-message">{errorMessage}</p>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  onAuthentication: PropTypes.func.isRequired,
};

export default Login;
