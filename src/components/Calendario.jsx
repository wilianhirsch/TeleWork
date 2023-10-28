import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../styles/Calendario.css';
// import axios from 'axios';
import { format } from 'date-fns';
import { IoArrowBackOutline, IoArrowForwardOutline } from 'react-icons/io5';
import { ptBR } from 'date-fns/locale';

// function fetchEscala(date, setModalidadeData) {
//   axios.get(`/seu-endpoint-flask/${date}`)
//     .then((response) => {
//       setModalidadeData(response.data.modalidade);
//     })
//     .catch((error) => {
//       console.error("Erro ao buscar a modalidade:", error);
//     });
// }

function formatoData(date) {
  return (
    <div>
      <span className="Ano">{format(date, 'yyyy')}</span>
      <br className="QuebraLinha" />
      <span className="Mes">{format(date, 'MMMM', { locale: ptBR })}</span>
    </div>
  );
}

function Escala(date) {
  const data = date;
  return (
    <div>
      <span>{ data.getMonth() + 1 }</span>
    </div>
  );
}

function Calendario() {
  const [value, onChange] = useState(new Date());
  return (
    <Calendar
      className="calendario"
      onChange={onChange}
      value={value}
      view="month"
      showNeighboringMonth={false}
      calendarType="gregory"
      locale="pt-BR"
      tileContent={({ date }) => Escala(date)}
      prevLabel={<div className="botoes_calend"><IoArrowBackOutline /></div>}
      prev2Label={null}
      nextLabel={<div className="botoes_calend"><IoArrowForwardOutline /></div>}
      next2Label={null}
      formatMonthYear={(locale, date) => formatoData(date)}
    />
  );
}

export default Calendario;
