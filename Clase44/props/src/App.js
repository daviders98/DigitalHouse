import ContenedorPublicidad from './components/ContenedorPublicidad';
import TiraPeliculas from "./components/TiraPeliculas.js"
import Contador from './components/Contador'
import Gif from "./components/Gif"
import { Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <Gif/>
        <ContenedorPublicidad>
          <h2>Publicidad!!!!</h2>
        </ContenedorPublicidad>
        <TiraPeliculas/>
        <Contador inicial = {0}/>
        <ContenedorPublicidad>
          <ul>
            <li>Publi 1</li>
            <li>Publi 2</li>
            <li>Publi 3</li>
          </ul>
        </ContenedorPublicidad>
      </main>
    </div>
  );
}

export default App;
