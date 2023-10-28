import React from 'react';
import '../styles/Inicio.css';
import { slide as Menu } from 'react-burger-menu';
import {
  IoRadioButtonOn, IoRadioButtonOff, IoNotificationsOutline,
} from 'react-icons/io5';

function Header() {
  const imgSrc = `${process.env.PUBLIC_URL}/foto.jpeg`;
  return (
    <header className="app-header">
      <Menu
        className="left-menu"
        noOverlay
        customBurgerIcon={<img src={imgSrc} alt="Colaborador" className="avatar" />}
      >
        <div className="bm-nome">
          <span className="bm-info">Wilian Hirsch</span>
        </div>
        <div className="bm-matricula">
          <span className="bm-label">Matrícula:</span>
          <span className="bm-info">4349962</span>
        </div>
        <div className="bm-papeis">
          <span className="bm-label">Papeis de Usuário:</span>
          <div>
            <div className="bm-linhas-papel">
              <IoRadioButtonOn />
              <span className="bm-info">Colaborador</span>
            </div>
            <span className="bm-info2">Divisão de Tecnologia</span>
          </div>
          <div>
            <div className="bm-linhas-papel">
              <IoRadioButtonOff />
              <span className="bm-info">Gestor</span>
            </div>
            <span className="bm-info2">Seção de Infraestrutura</span>
          </div>
        </div>
      </Menu>
      <Menu
        className="right-menu"
        noOverlay
        right
        customBurgerIcon={(
          <div className="notification-icon">
            <IoNotificationsOutline color="#00392d" size="2em" />
            <span className="badge">
              2
            </span>
          </div>
      )}
      >
        <div className="bm-div-notif-titulo">
          <span className="bm-notif-titulo">Últimas Notificações</span>
        </div>
        <div className="bm-mensagem ult">
          <div className="bm-div-cabec-msg">
            <span className="bm-cabec-msg-tipo">Lembrete</span>
            <span className="bm-cabec-msg-hora">2h atrás</span>
          </div>
          <div className="bm-div-msg">
            <span className="bm-msg">A data final para envio da escala de Julho/2023 está se aproximando. Data Final: 23/06/2023.</span>
          </div>
        </div>
        <div className="bm-mensagem ult">
          <div className="bm-div-cabec-msg">
            <span className="bm-cabec-msg-tipo">Aviso</span>
            <span className="bm-cabec-msg-hora">2 dias atrás</span>
          </div>
          <div className="bm-div-msg">
            <span className="bm-msg">O colaborador José Mendes foi adicionado à sua equipe.</span>
          </div>
        </div>
        <div className="bm-div-notif-titulo">
          <span className="bm-notif-titulo">Notificações Anteriores</span>
        </div>
        <div className="bm-mensagem ant">
          <div className="bm-div-cabec-msg">
            <span className="bm-cabec-msg-tipo">Aviso</span>
            <span className="bm-cabec-msg-hora">5 dias atrás</span>
          </div>
          <div className="bm-div-msg">
            <span className="bm-msg">Lorem ipsum dolor sit amet consectetur. Donec egestas turpis metus condimentum sed imperdiet ornare vitae purus.</span>
          </div>
        </div>
        <div className="bm-mensagem ant">
          <div className="bm-div-cabec-msg">
            <span className="bm-cabec-msg-tipo">Aviso</span>
            <span className="bm-cabec-msg-hora">10 dias atrás</span>
          </div>
          <div className="bm-div-msg">
            <span className="bm-msg">Lorem ipsum dolor sit amet consectetur. Aenean fames interdum urna neque.</span>
          </div>
        </div>
      </Menu>
    </header>
  );
}

export default Header;
