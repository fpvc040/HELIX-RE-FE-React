import logo from './helix.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://app.helix.re"
          target="_blank"
          rel="noopener noreferrer"
        >
          app.helix.re
        </a>
      </header>
    </div>
  );
}

export default App;
