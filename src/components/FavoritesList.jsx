import MovieCard from './homepage/MovieCard';
import { useEffect, useState } from 'react';
const axios = require('axios');

function FavoritesList() {

  const moviesGenres = {
    "genres": [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 16,
            "name": "Animation"
        },
        {
            "id": 35,
            "name": "Comedy"
        },
        {
            "id": 80,
            "name": "Crime"
        },
        {
            "id": 99,
            "name": "Documentary"
        },
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 10751,
            "name": "Family"
        },
        {
            "id": 14,
            "name": "Fantasy"
        },
        {
            "id": 36,
            "name": "History"
        },
        {
            "id": 27,
            "name": "Horror"
        },
        {
            "id": 10402,
            "name": "Music"
        },
        {
            "id": 9648,
            "name": "Mystery"
        },
        {
            "id": 10749,
            "name": "Romance"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        },
        {
            "id": 10770,
            "name": "TV Movie"
        },
        {
            "id": 53,
            "name": "Thriller"
        },
        {
            "id": 10752,
            "name": "War"
        },
        {
            "id": 37,
            "name": "Western"
        }
    ]
  }
  const [movieDetails, setMovieDetails] = useState({});
  // je dois récupérer tout ce qu'il y a dans localStorage
  const favorites = JSON.parse(localStorage.getItem('favorites'));
  console.log('favorites',favorites)
  
  
  // afficher chaque film sous forme de moviecard



  return (
    <div className='flex flex-wrap h-screen'>
      {favorites.map((favorite) => 
        {
          console.log(favorite.id);
          const getDetails = `https://api.themoviedb.org/3/movie/${favorite.id}?api_key=0aba5a6d503daa5780b386d6fd32a451`;
          axios.get(getDetails)
          .then((res) => {
            return res.data;
          })
          .then((data) => {
            setMovieDetails(data);
          })
        return <MovieCard data={movieDetails} moviesGenres={moviesGenres}/>
        }
      )}
    </div>
  )
}

export default FavoritesList