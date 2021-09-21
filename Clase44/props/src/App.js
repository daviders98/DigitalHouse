import ContenedorPublicidad from './components/ContenedorPublicidad';
import TiraPeliculas from "./components/TiraPeliculas.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <ContenedorPublicidad>
          <h2>Publicidad!!!!</h2>
        </ContenedorPublicidad>
        <TiraPeliculas/>
        <TiraPeliculas/>
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
