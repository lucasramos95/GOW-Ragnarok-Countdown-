import React from 'react';
import Carousel from 'react-elastic-carousel';
import Item from './Item';
import './App.css';
import YoutubeEmbed from "./YoutubeEmbed";

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
          A ameaça do Ragnarök se aproxima. Kratos e Atreus terão de escolher entre a segurança deles próprios e a dos reinos.
          </p>
        </div>
        <div className="styling-example">
            <Carousel itemsToShow={3}>
              <Item><img className='img-01' src='01.jpg'/></Item>
              <Item><img className='img-01' src='02.jpg'/></Item>
              <Item><img className='img-01' src='03.jpg'/></Item>
              <Item><img className='img-01' src='04.jpg'/></Item>
              <Item><img className='img-01' src='05.jpg'/></Item>
              <Item><img className='img-01' src='06.jpg'/></Item>
          </Carousel>
        </div>
          <h1>Youtube Embed</h1>
          <YoutubeEmbed embedId="x6oF3Jxu7X0"/>
          <YoutubeEmbed embedId="0N4J-7gsaGc"/>
    </div>
  );
}
