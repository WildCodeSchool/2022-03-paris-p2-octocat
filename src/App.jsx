import './App.css';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import { Routes, Route } from 'react-router-dom';
import SearchPagebyInput from './pages/SearchPageByInput';
import SearchResult from './components/homepage/SearchResult';
import MovieDetails from './pages/MovieDetails';
import TvDetails from './pages/TvDetails';
import AnimIntro from './components/homepage/AnimIntro';
import FavoritesPage from './pages/FavoritesPage';
import MovieTrailer from './components/MovieTrailer';
import ContactPage from './pages/ContactPage';
import CommentForm from './components/homepage/CommentForm';
import PageNotFound from './pages/PageNotFound';
import EshopPage from './pages/EshopPage';

function App() {
  return (
    <div className="App text-white font-Heebo bg-black">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/input-search-result' element={<SearchPagebyInput />} />
        <Route path='/search-result' element={<SearchResult />} />
        <Route path='/anim-intro' element={<AnimIntro />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/tv/:id" element={<TvDetails />} />
        <Route path='/searchpage/:id' element={<SearchPage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
        <Route path='/movie/trailer/:id' element={<MovieTrailer />} />
        <Route path='/shop' element={<EshopPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
