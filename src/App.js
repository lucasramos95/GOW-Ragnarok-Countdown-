import React from 'react';
import CountdownTimer from './CountdownTimer';
import './App.css';

export default function App() {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <div className='App'>
      <img className='background' src='./background.jpg'/>
      <h2>GOD OF WAR RAGNAROK - CONTAGEM DE LANÇAMENTO - 09/11/2022</h2>
      <div className='countdownText'>
        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      </div>
      
    </div>
  );
}
