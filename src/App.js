import { useState } from 'react';
import './App.css';
import Carousel from 'react-elastic-carousel';
import Item from './Item';

export default function App() {

  const breakPoints = [
    { width: 1, itemToShow: 1 },
    { width: 550, itemToShow: 2, itemToScroll: 2 },
    { width: 768, itemToShow: 3 },
    { width: 1200, itemToShow: 4 },
  ]

  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8])

  const addItem = () => {
    const nextItem = Math.max(1, items.length + 1)
    setItems([...items, nextItem])
  }

  return (
    <div className='App'>
      <img className='background' src='./background.jpg'/>
      <h2>GOD OF WAR RAGNAROK - LANÇAMENTO: 09/11/2022</h2>
      <div className='gow_text'>
      <p>Embarque com Kratos e Atreus em uma jornada épica emocionante sobre apego e superação.
      Do Santa Monica Studio, esta é a sequência da aclamada versão de 2018 de God of War. 
      O Fimbulwinter já começou. 
      Kratos e Atreus devem viajar pelos Nove Reinos em busca de respostas enquanto as forças asgardianas se preparam para uma batalha profetizada que causará o fim do mundo. 
      Nessa jornada, eles explorarão paisagens míticas impressionantes e enfrentarão inimigos aterradores: deuses nórdicos e monstros. 
      A ameaça do Ragnarök se aproxima. Kratos e Atreus terão de escolher entre a segurança deles próprios e a dos reinos.</p>
      </div>
      <div className='container'>
        <div className='controls-wrapper'>

        </div>
        <hr className='seperator' />
        <div className='carousel-wraper'>
          
        </div>
      </div>
    </div>
  );
}
