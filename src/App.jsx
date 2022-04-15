import './App.css';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App text-white font-Heebo bg-black">
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
