import './App.css';
import { useCountdown } from './countdown';

function App() {
  return (
    <div className="App">
      <img src='./background.jpg' className='background'/>
      <h2>GOD OF WAR RAGNAROK - LANÇAMENTO: 09/11/2022</h2>
      <>{useCountdown}</>
    </div>
  );
}

export default App;
