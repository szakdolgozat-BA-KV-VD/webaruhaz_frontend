import logo from './logo.svg';
import './App.css';
import { ListGroup } from 'react-bootstrap';
import Admin from './Components/Admin/Admin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Autó webáruház</h1>
      </header>
      <main>
        <Admin/>
      </main>
    </div>
  );
}

export default App;
