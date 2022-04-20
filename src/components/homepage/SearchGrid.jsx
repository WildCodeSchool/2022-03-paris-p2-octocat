import { useEffect, useState } from 'react';
import SearchGridCard from './SearchGridCard';
const axios = require('axios');

function SearchGrid({title, dataSource}) {

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
      <div className='h-screen pl-4'>
        <div className='font-extrabold text-xl pl-4 py-4'>
          <h2>{title}</h2>
        </div>
            <div className='flex flex-wrap h-full gap-y-8 mt-2.5 justify-center'>
              {movieList.length > 0 &&
                movieList.map((movie,i) => {
                  return (            
                    <SearchGridCard key={movie.id} data={movie}/>
                  )
                })
              }
            </div>
      </div>
    </>

  )
}

export default SearchGrid