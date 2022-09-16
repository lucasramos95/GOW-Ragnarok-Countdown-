import React from 'react';
import CountdownTimer from './CountdownTimer';
import './App.css';

export default function App() {
  const FIFTY_FOUR_DAYS_IN_MS = 54 * 6 * 34 * 33 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterFiftyFourDays = NOW_IN_MS + FIFTY_FOUR_DAYS_IN_MS;

  return (
    <div className='App'>
      <img className='background' src='./background.jpg'/>
      <h2>GOD OF WAR RAGNAROK - CONTAGEM DE LANÇAMENTO - 09/11/2022</h2>
      <div className='countdownText'>
        <CountdownTimer targetDate={dateTimeAfterFiftyFourDays} />
      </div>
    </div>
  );
}
