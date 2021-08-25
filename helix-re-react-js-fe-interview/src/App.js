import logo from './helix.svg';
import './App.css';
import Button from './Button'

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
          {/* Task 3 - import button and pass in the right props. - Make grey and hover type */}
          <Button >
            Task 3
          </Button>
      </header>
      
    </div>
  );
}

export default App;
