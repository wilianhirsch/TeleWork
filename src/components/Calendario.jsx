import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../styles/Calendario.css';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { IoArrowBackOutline, IoArrowForwardOutline } from 'react-icons/io5';

const formatoData = (locale, date) => {
  <div>
    <span className="Ano">{format(date, 'yyyy')}</span>
    <br className="QuebraLinha" />
    <span className="Mes">{format(date, 'MMMM', { locale })}</span>
  </div>;
};

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
      locale={ptBR}
      prevLabel={<div className="botoes_calend"><IoArrowBackOutline /></div>}
      prev2Label={null}
      nextLabel={<div className="botoes_calend"><IoArrowForwardOutline /></div>}
      next2Label={null}
      formatMonthYear={(locale, date) => formatoData(locale, date)}
    />
  );
}

export default Calendario;
