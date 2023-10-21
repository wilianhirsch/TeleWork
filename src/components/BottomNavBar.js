import React, {useState} from 'react';
import { IoCalendarOutline, IoHomeOutline, IoListOutline, IoAirplaneOutline, IoPeopleOutline } from 'react-icons/io5';
import '../styles/BottomNavBar.css';

function BottomNavBar() {
  const [botaoAcaoAtivo, setbotaoAcaoAtivo] = useState(true);
  return (
    <div className='bottom-bar'>
      {botaoAcaoAtivo && (
        <div>
      <div className='overlay-acoes' onClick={() => setbotaoAcaoAtivo(false)}/>
      <div className='acoes'><div className='aus-inesp'>aus</div><div className='sol-alt'>sol</div></div>
      </div>
      )}
      <div className='botao-acao' onClick={() => setbotaoAcaoAtivo(!botaoAcaoAtivo)}><IoCalendarOutline size='2em'/></div>
    <div className="bottom-navigation-bar">
      <div
          className="nav-item" 
          style={{backgroundColor: '#da2047', 
                  color:'white', 
                  aspectRatio: "1 / 1", 
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderColor: "#00392d"}}>
        <IoHomeOutline size='1.5em'/>
        <span>Início</span>
      </div>
      <div className="nav-item">
        <IoListOutline size='1.5em'/>
        <span>Lista</span>
      </div>
      <div className="nav-item">
      <IoAirplaneOutline  size='1.5em'/>
        <span>Feriados</span>
      </div>
      <div className="nav-item">
        <IoPeopleOutline size='1.5em'/>
        <span>Equipe</span>
      </div>
    </div>
    </div>
  );
}

export default BottomNavBar;
