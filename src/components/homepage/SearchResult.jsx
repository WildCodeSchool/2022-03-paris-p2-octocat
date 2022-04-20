import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const SearchResult = () => {
    const [movies, setMovies] = useState([]);

    const { state } = useLocation();

    const search = state.searchQuery;

    console.log(state);

    useEffect(() => {
        axios
            .get(
                `https://api.themoviedb.org/3/search/movie?api_key=0fb4d196071831889c6fc454d80e18b1&query=${search}`
            )
            .then((res) => res.data.results)
            .then((data) => setMovies(data));
    }, [search]);

    return (
        <>
            {/* <div>
                {movies === null && <p>Please fill in research input</p>}
            </div> */}
            <div>
                {movies && movies.map((result) => (
                        <li className="text-white">{result.title}</li>
                    ))}
                <p className="text-white">coucou</p>
            </div>
        </>
    );
};

export default SearchResult;
