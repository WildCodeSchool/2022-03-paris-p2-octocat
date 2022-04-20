import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const SearchBar = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/search-result",{state: {searchQuery}});
  }
  //  useEffect( () => {
  //   axios
  //     .get(`https://api.themoviedb.org/3/movie?api_key=0fb4d196071831889c6fc454d80e18b1&q=${searchQuery}`)
  //     .then (res => res.data.results)
  //     .then (data => setSearchResults(data))
  //  }, [searchQuery]);

  console.log(searchQuery);

  return (
    <div className="flex items-center text-black" id="search-bar">
      <div id="search-bar-container">
        <div id="search-bar-input">
          <input id= "coucou" type="text" placeholder="Search for a movie or a TV show"
           value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
        </div>
        <div id="search-bar-button">
            <button className="text-white" disabled={!searchQuery} onClick={handleNavigate}>coucou</button>
        </div>
        <div>
          <ul id="search-results">
            {searchResults.map(result => <li className="text-white">{result.title}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;