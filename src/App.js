import logo from './logo.svg';
import './App.css';
import { ListGroup } from 'react-bootstrap';
import Public from './Pages/Public';

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
        <Public />
      </main>
    </div>
  );
}

export default App;
