import './App.css';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import TvDetails from './pages/TvDetails';

function App() {
  return (
    <div className="App text-white font-Heebo bg-black">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/tv/:id" element={<TvDetails />} />
      </Routes>
    </div>
  );
}

export default App;
