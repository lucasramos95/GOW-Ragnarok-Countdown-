import React from 'react';
import './App.css';
import Carousel from 'better-react-carousel';

const Gallery = () => {
  return (
    <Carousel cols={2} rows={1} gap={10} loop>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=1" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=2" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
      <Carousel.Item>
        {/* anything you want to show in the grid */}
      </Carousel.Item>
      {/* ... */}
    </Carousel>
  )
}

export default function App() {
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
    </div>
  );
}
