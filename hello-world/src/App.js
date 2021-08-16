import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'

function App() {
  return (
    <div className="App">
      <Message />
      <Greet name = 'Bruce' heroName = 'Batman'>
        <p>This is Children props</p>
      </Greet>
      <Greet name = 'Peter' heroName = 'Spider-Man'>
        <button>Acitve</button>
      </Greet>
      <Greet name = 'Dr' heroName = 'Doc Oct'/>

      <Welcome name = 'Bruce' heroName = 'Batman'>
        <p>This is Children props</p>
      </Welcome>
      <Welcome name = 'Peter' heroName = 'Spider-Man'>
        <button>Acitve</button>
      </Welcome>
      <Welcome name = 'Dr' heroName = 'Doc Oct'/>
      <Hello />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
