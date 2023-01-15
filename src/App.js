import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Times';

function App() {

  const times = [
    {
      nome: 'Zé Lootinho',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9',
    }, 
    {
      nome: 'Matador',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Mochilinha',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Lider',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9',
    },
    
  ]

  const [jogadores, setJogadores] = useState([]);

  const aoNovoJogadorAdicionado = (jogador) => {
    setJogadores([...jogadores, jogador])
  }
  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador)}/>
      {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} jogadores={jogadores.filter(jogador => jogador.time === time.nome)}/>)}
      
    </div>
  );
}

export default App;
