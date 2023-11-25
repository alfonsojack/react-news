import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';


function App() {
  return (
    <main className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/source/:sourceId" element={<Home/>} />
        <Route path="/search/:searchTerm" element={<Home/>} />
      </Routes>
    </main>
  );
}

export default App;
