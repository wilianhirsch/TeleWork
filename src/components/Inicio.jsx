import React from 'react';
import '../styles/Inicio.css';
import {
  IoCheckmarkCircle,
} from 'react-icons/io5';
import Calendario from './Calendario';
import BottomNavBar from './BottomNavBar';

function Inicio() {
  return (
    <div className="app-container">
      <main className="app-main">
        <div className="div-info-inicio">
          <div className="div-status">
            <div className="div-label-status">
              <span className="label-status">Status:</span>
            </div>
            <div className="div-info-status">
              <IoCheckmarkCircle className="icone-status" />
              <span className="info-status">Autorizada</span>
            </div>
          </div>
        </div>
        <div className="calendar-container">
          {' '}
          {/* Container para centralizar o calendário */}
          <Calendario />
          {' '}
          {/* Adicione o componente do calendário aqui */}
        </div>
      </main>

      <BottomNavBar />
    </div>
  );
}

export default Inicio;
