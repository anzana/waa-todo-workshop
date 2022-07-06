import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Dashboard></Dashboard>
      </BrowserRouter>
    </div>
  );
}

export default App;
