import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>

const SearchBar = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  const navigate = useNavigate();

  const handleNavigateSearch = () => {
    navigate("/search-result",{state: {searchQuery}});
  }

  // Press enter to search
  const handleSearch = () => {
      window.addEventListener("keydown", (e) => {
        if (e.key === "Enter") { handleNavigateSearch();}
      })}

  useEffect(() => {
    handleSearch();
  },[]);

  return (
    <div className="flex items-center text-black" id="search-bar">
      <div id="search-bar-container" className="flex items-center gap-4">
        <div id="search-bar-input">
            <input id= "research-text-field" className="flex rounded-lg py-1 px-2 border-transparent" 
            type="text" placeholder="Enter a movie title..." 
            onKeyDown={handleSearch}
            value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
        </div>
        <div id="search-bar-button" className="flex justify-center items-center">
            <button className="text-white" disabled={!searchQuery} onClick={handleNavigateSearch}>{searchIcon}</button>
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
