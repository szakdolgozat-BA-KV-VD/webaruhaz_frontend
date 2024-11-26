import logo from './logo.svg';
import './App.css';
import { ListGroup } from 'react-bootstrap';
import Admin from './Pages/Admin';
import Public from './Pages/Public';
import { BrowserRoute, Routes, Route, BrowserRouter } from "react-router-dom"
import NoPage from './Pages/NoPage';
import Layout from './Pages/Layout';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Public />} />
              <Route path="admin" element={<Admin />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>

  );
}

export default App;
