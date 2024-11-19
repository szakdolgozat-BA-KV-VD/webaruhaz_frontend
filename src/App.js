import logo from './logo.svg';
import './App.css';
import { ListGroup } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Autó webáruház</h1>
      </header>
      <main>
        <ListGroup>
          <ListGroup.Item>Public</ListGroup.Item>
          <ListGroup.Item>Admin</ListGroup.Item>
        </ListGroup>
        
      </main>
    </div>
  );
}

export default App;
