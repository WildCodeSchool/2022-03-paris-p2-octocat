import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
const axios = require('axios');

function MovieSlider({title, dataSource}) {

    // fetching list of movies genres

    const [moviesGenres, setMoviesGenres] = useState([]);
    const urlGenres = 'https://api.themoviedb.org/3/genre/movie/list?api_key=0aba5a6d503daa5780b386d6fd32a451';
  
    useEffect(() => {
      axios.get(urlGenres)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setMoviesGenres(data);
      })
    },[]);

  // fetching all data from lists based on URLs defined in HomePage

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    axios.get(dataSource)
    .then((res) => {
      return res.data;
    })
    .then((data) => {
      setMovieList(data.results);
    })
  },[]);




  return (
    <>
      <div className='flex flex-col h-60 pl-4'>
        <div className='font-extrabold text-xl pl-4 py-4'>
          <h2>{title}</h2>
        </div>
        <div className='flex h-full overflow-x-scroll overflow-y-hidden'>
          {movieList.length > 0 &&
            movieList.map((movie,i) => {
              return (            
                <MovieCard key={movie.id} data={movie} moviesGenres={moviesGenres}/>
              )
            })
          }
        </div>
      </div>
    </>

  )
}

export default MovieSlider