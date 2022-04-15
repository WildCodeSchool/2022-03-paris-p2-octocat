import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
const axios = require('axios');

function MovieSlider({title, dataSource}) {

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

  console.log("movielist", movieList)


  return (
    <>
      <div className='flex h-60'>
        <div>
          <h2>{title}</h2>
        </div>
        <div className='flex'>
          {movieList.length > 0 &&
            movieList.map((movie,i) => {
              console.log("movie",movie);
              console.log(`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`);
              return (            
                <MovieCard key={movie.id} data={movie}/>
              )
            })
          }


        </div>
      </div>
    </>

  )
}

export default MovieSlider