import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function SearchGrid({title, dataSource}) {

<<<<<<< HEAD
  // fetching list of movies genres
=======
  let param = useParams();
  const API_URL_GENRE= `https://api.themoviedb.org/3/discover/movie?api_key=f0cf6cd5405edeea985fed5132d6e858&with_genres=${param.id}`;

      // fetching list of movies genres
>>>>>>> dev

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
        axios.get(API_URL_GENRE)
        .then((res) => {
          return res.data;
        })
        .then((data) => {
          setMovieList(data.results);
        })
      },[param.id]);

  return (
    <>
      <div className='h-full pl-4'>
<<<<<<< HEAD
        <div className='font-extrabold text-xl pl-4 py-4'>
          <h2>{title}</h2>
=======
        <div className='font-extrabold text-xl pl-4 py-4 Slate'>

        {
          moviesGenres.length > 0 && (
          moviesGenres.map((genre) => 
          <h2 className='font-extrabold text-xl text-white'>{genre.name}</h2>
          ))}

>>>>>>> dev
        </div>
            <div className='flex flex-wrap h-full gap-y-8 mt-2.5 justify-center'>
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

export default SearchGrid
