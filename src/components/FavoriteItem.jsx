import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
const axios = require('axios');

function FavoriteItem({movieId}) {

  const getDetails = `https://api.themoviedb.org/3/movie/${movieId}?api_key=0aba5a6d503daa5780b386d6fd32a451`;
  const [movieDetails, setMovieDetails] = useState({});
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

  /////// redirect to movie details

  const navigate = useNavigate();

  const handleClickItem = (e) => {
    e.preventDefault();
    navigate(`/movie/${movieId}`, {state: movieId});
  }

  //////// delete an item

  // remove the favorite item of the favorite list when clicking the trash icon
  // i need to implement a function on the parent element to remove items on the list

  // remove the movie from the local storage
  let oldFavorites = localStorage.getItem('favorites') !== null ? JSON.parse(localStorage.getItem('favorites')) : [];
  const handleTrash = () => {
    oldFavorites = oldFavorites.filter(movie => movie.id !== movieDetails.id);
    localStorage.setItem('favorites', JSON.stringify(oldFavorites));
  }

  // toggle the favorite button on movie details page on 'false'


  return isLoading ? (
    <svg role="status" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
  ) : (
    <>
      <div class="w-56 h-96">
        <div class="group relative">
          <div onClick={handleClickItem} class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 sm:h-80 sm:aspect-none sm:cursor-pointer">
            <img src={imgSrc} alt="poster" class="w-full h-full object-center object-cover lg:w-full lg:h-full"/>
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-md text-white ">
                <button className='font-bold text-left'>
                  {movieDetails.original_title}
                </button>
              </h3>
              <p class="mt-1 text-sm text-white">{movieDetails.release_date.slice(0,4)}</p>
            </div>
            <button
            onClick={handleTrash}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default FavoriteItem