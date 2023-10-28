import React, { useState, useEffect } from 'react';
import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Inicio from './components/Inicio';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    // Verifique a autenticação ao carregar a página
    const token = localStorage.getItem('token');
    if (token) {
      // Se um token estiver armazenado, o usuário está autenticado
      setAuthenticated(true);
    }
    // Marque a inicialização como concluída
    setInitializing(false);
  }, []);

  const handleAuthentication = (isAuthenticated) => {
    setAuthenticated(isAuthenticated);
  };

  const inactivityTimeout = 60 * 60 * 1000; // 30 minutos em milissegundos
  let inactivityTimer;

  function logoutDueToInactivity() {
    localStorage.removeItem('token');
    // Redirecione o usuário para a página de login ou qualquer outra ação necessária
    window.location.href = '/'; // Redireciona para a página de login
  }

  function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(logoutDueToInactivity, inactivityTimeout);
  }

  // Adicione event listeners para redefinir o temporizador de inatividade
  document.addEventListener('click', resetInactivityTimer);
  document.addEventListener('keydown', resetInactivityTimer);

  if (initializing) {
    return <div>Verificando a autenticação...</div>;
  }

  return (
    <BrowserRouter>
      <div className="container">
        {authenticated ? <Header /> : null}
        <Routes>
          <Route
            path="/"
            element={
              <Login onAuthentication={handleAuthentication} />
            }
          />
          <Route
            path="/inicio"
            element={
              authenticated ? (
                <Inicio />
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
