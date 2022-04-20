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


  return (
    <>
      <div className='flex flex-col h-60 pl-4'>
        <div className='font-extrabold text-xl pl-4 py-4'>
          <h2>{title}</h2>
        </div>
        <div className='flex h-full overflow-x-auto overflow-y-hidden'>
          {movieList.length > 0 &&
            movieList.map((movie,i) => {
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