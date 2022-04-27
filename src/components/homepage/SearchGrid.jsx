import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function SearchGrid({title, dataSource}) {

  let param = useParams();
  const API_URL_GENRE= `https://api.themoviedb.org/3/discover/movie?api_key=f0cf6cd5405edeea985fed5132d6e858&with_genres=${param.id}`;

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

  console.log('moviesgenres', moviesGenres);

// fetching all data from lists based on URLs defined in SearchPage

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
        <div className='font-extrabold text-xl pl-4 py-4 Slate'>

        {/* {
          moviesGenres.length > 0 && (
          moviesGenres.map((genre) => 
          <h2 className='font-extrabold text-xl text-white'>{genre.name}</h2>
          ))} */}

        { 
          movieList.length > 0 && (
          movieList.map((genre) => { 
            if (genre.id === param.id) {
            return <h2 className='font-extrabold text-xl text-white'>{genre.name}</h2>
            }
          }
          )
        )}

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
