import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
const axios = require('axios');

function MovieSlider({title, dataSource}) {

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

  // fetching list of movies genres

  const [genres, setGenres] = useState([]);
  const getGenres = 'https://api.themoviedb.org/3/genre/movie/list?api_key=0aba5a6d503daa5780b386d6fd32a451';

  useEffect(() => {
    axios.get(getGenres)
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      setGenres(data);
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
                <MovieCard key={movie.id} data={movie} genres={genres}/>
              )
            })
          }
        </div>
      </div>
    </>

  )
}

export default MovieSlider