import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';


function App() {
  return (
    <main className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </main>
  );
}

export default App;
