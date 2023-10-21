import React from 'react';
import { slide as Menu } from 'react-burger-menu';

function LeftSidebar({ isOpen, onToggle }) {
  // Função para alternar a visão
  const handleViewToggle = () => {
    onToggle();
  };

  return (
    <Menu left isOpen={isOpen}>
      {/* Botão de alternância de visão */}
      <button onClick={handleViewToggle}>Alternar Visão</button>
      
      {/* Informações do usuário */}
      <div>
        <p>Nome do Usuário: John Doe</p>
        <p>Equipe: Desenvolvimento</p>
      </div>
    </Menu>
  );
}

export default LeftSidebar;
