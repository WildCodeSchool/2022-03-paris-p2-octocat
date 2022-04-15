import { useEffect, useState } from "react";
import axios from 'axios';

const SearchBar = () => {

  const [searchQuery, setSearchQuery] = useState('Batman');
  const [searchResults, setSearchResults] = useState([]);
  

   useEffect( () => {
    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=0fb4d196071831889c6fc454d80e18b1&query=${searchQuery}`)
      .then (res => res.data)
      .then (data => setSearchResults(data))
   }, [searchQuery]);

  return (
    <div className="flex items-center" id="search-bar">
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