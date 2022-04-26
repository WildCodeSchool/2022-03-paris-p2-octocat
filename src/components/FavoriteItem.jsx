import { useEffect, useState } from 'react';
const axios = require('axios');

function FavoriteItem({movieId}) {

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

  const getDetails = `https://api.themoviedb.org/3/movie/${movieId}?api_key=0aba5a6d503daa5780b386d6fd32a451`;
  const [movieDetails, setMovieDetails] = useState({});
  const [movieYear, setMovieYear] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(getDetails)
    .then((res) => {
      return res.data;
    })
    .then((data) => {
      setMovieDetails(data);
      setIsLoading(false);
    })
  },[getDetails]);

  const imgSrc = `https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`;


  return isLoading ? (
    <svg role="status" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
  ) : (
    <div class="max-w-2xl mx-auto lg:max-w-7xl">
    <div class="mt-6 grid grid-cols-1 sm:grid-cols-5">
      <div class="group relative">
        <div class="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img src={imgSrc} alt="poster" class="w-full h-full object-center object-cover lg:w-full lg:h-full" />
        </div>
        <div class="mt-4 flex justify-between">
          <div>
            <h3 class="text-xl font-extrabold text-white">
              <a href="#">
                <span aria-hidden="true" class="absolute inset-0"></span>
                {movieDetails.original_title}
              </a>
            </h3>
            <p class="mt-1 text-sm text-white">{movieDetails.release_date.slice(0,4)}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default FavoriteItem