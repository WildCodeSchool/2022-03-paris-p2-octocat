import { useEffect, useState } from "react";
import axios from 'axios';

const SearchBar = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

   useEffect( () => {
    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchQuery}`)
      .then (res => res.data)
      .then (data => setSearchResults(data))
   }, [searchQuery]);

  return (
    <div id="search-bar">
      <div id="search-bar-container">
        <div id="search-bar-input">
          <input type="text" placeholder="Search for a movie or a TV show"
            value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
        </div>
        <div id="search-bar-button">
          <button><i id="search-icon"></i></button>
        </div>
        <div>
          <ul id="search-results">
            {searchResults.map(result => <li>{result.title}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;