import './App.css';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import { Routes, Route } from 'react-router-dom';
import SearchPagebyInput from './pages/SearchPageByInput';
import SearchResult from './components/homepage/SearchResult';
import MovieDetails from './pages/MovieDetails';
import TvDetails from './pages/TvDetails';
import FavoritesPage from './pages/FavoritesPage';
import ContactPage from './pages/ContactPage';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div className="App text-white font-Heebo bg-black">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/input-search-result' element={<SearchPagebyInput />} />
        <Route path='/search-result' element={<SearchResult />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/tv/:id" element={<TvDetails />} />
        <Route path='/searchpage/:id' element={<SearchPage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
        <Route path='/shop' element={<EshopPage />} />
        <Route path='/shop/cart' element={<Cart/>} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
