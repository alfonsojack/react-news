import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import ErrorPage from './ErrorPage';


function App() {
  return (
    <main className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/source/:sourceId" element={<Home/>} />
        <Route path="/search/:searchTerm" element={<Home/>} />
        <Route path="/error/:response" element={<ErrorPage message='Something went wrong on our way to retrieve your news.'/>}/>
        <Route path='/*' element={<ErrorPage message='This page does not exist'/>}/>
      </Routes>
    </main>
  );
}

export default App;
