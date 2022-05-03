import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SearchResult = () => {

    const { state } = useLocation();

    const search = state.searchQuery;

    // fetching list of movies genres

    const [moviesGenres, setMoviesGenres] = useState([]);
    const urlGenres = 'https://api.themoviedb.org/3/genre/movie/list?api_key=0aba5a6d503daa5780b386d6fd32a451';

    useEffect(() => {
      axios
        .get(urlGenres)
        .then((res) => res.data)
        .then((data) => setMoviesGenres(data))
    },[]);

        // fetching all data from lists based on URLs defined in HomePage

    const [movies, setMovies] = useState([]);

    useEffect(() => {
      axios
          .get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${search}`)
          .then((res) => res.data.results)
          .then((data) => setMovies(data))
  }, [search]);

    return (
      <>
        <Navbar />
        <div className='h-full pl-4'>
          <div className='font-extrabold text-xl pl-4 py-4'>
            <h2>{search}</h2>
          </div>
          <div className='flex flex-wrap h-full gap-y-8 mt-2.5 justify-center'>
            {movies.length > 0 && movies.map((movie,i) => {
                return (         
                  <MovieCard key={movie.id} data={movie} moviesGenres={moviesGenres}/>
                )
              })
            }
          </div>
        </div>
        <Footer />
      </>
    );
};

export default SearchResult;
