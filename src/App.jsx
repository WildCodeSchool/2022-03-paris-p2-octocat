import './App.css';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import SearchResult from './components/homepage/SearchResult';

function App() {
  return (
    <div className="App text-white font-Heebo bg-black">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/search-result' element={<SearchResult />} />

      </Routes>
    </div>
  );
}

export default App;
