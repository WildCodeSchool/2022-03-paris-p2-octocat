import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import SearchGridbyInput from "./SearchGridbyInput";

const SearchResult = () => {
    const [movies, setMovies] = useState([]);

    const { state } = useLocation();

    const search = state.searchQuery;

    console.log(state);

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${search}`)
            .then((res) => res.data.results)
            .then((data) => setMovies(data));
    }, [search]);

    return (
        <>
            {/* <div>
                {movies === null && <p>Please fill in research input</p>}
            </div> */}
            <div>
                {/* {movies && movies.map((result) => (
                        <li className="text-white">{result.title}</li>
                    ))} */}
                <SearchGridbyInput title={movies}
                dataSource={`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${search}`}/>
            </div>
        </>
    );
};

export default SearchResult;
