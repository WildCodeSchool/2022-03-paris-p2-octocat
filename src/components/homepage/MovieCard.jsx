import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CardFavButton from "./CardFavButton";

function MovieCard({data, moviesGenres}) {
  
  const navigate = useNavigate();
  const mediaId = data.id;

  const [isTv, setIsTv] = useState(false);
  useEffect(() => {
    const checkType = () => {
      return Object.getOwnPropertyNames(data).includes("first_air_date") ? setIsTv(true) : setIsTv(false);
    }
    checkType();
  },[data]);

  const handleClick = (e) => {
    e.preventDefault();
    if (isTv) {
      navigate(`/tv/${mediaId}`, {state: mediaId});
    } else {
      navigate(`/movie/${mediaId}`, {state: mediaId});
    }
  };

  const handleNavigatePlayPage = () => {
    navigate("/play-page");
  }
    ////////// handle favorite feature

    let oldFavorites = localStorage.getItem('favorites') !== null ? JSON.parse(localStorage.getItem('favorites')) : [];  // useState for favorite button
    const [isFavorite, setIsFavorite] = useState(null);
  
    // make the favorite button state to persist
    
    useEffect(() => {
      setIsFavorite(oldFavorites.find(movie => movie.id === data.id))
    },[data.id])
  
    // handle local storage on click
    
    const handleFavoriteclick = () => {
      if (isFavorite) {
        oldFavorites = oldFavorites.filter(movie => movie.id !== data.id);
        localStorage.setItem('favorites', JSON.stringify(oldFavorites));
      } else {
        const newFavorites = [...oldFavorites, {'id': data.id}];
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
      }
      setIsFavorite(!isFavorite);
    }
  
  return (
    <>
      <div className='cursor-pointer z-10 relative rounded-md overflow-hidden flex justify-start items-end shrink-0 mr-8 w-80 h-40 bg-no-repeat bg-cover sm:hover:scale-110 sm:ease-in-out sm:duration-300' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`}}>
        <div className='absolute w-full h-full pt-12 pl-4'>
          <div id="card_icons" className='flex justify-between items-center w-1/4'>
            <button id="play_button" className="relative z-100" onClick={handleNavigatePlayPage}>
              <svg xmlns="http://www.w3.org/2000PlayP/svg" className="h-10 w-10 hover:opacity-90" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </button>
            <CardFavButton data={data} />
          </div>
          <div onClick={handleClick} className='font-bold sm:text-lg'>
            {data.original_title ? data.original_title : data.original_name}
          </div>
          <div className='font-light sm:text-sm'>
          {
            // eslint-disable-next-line array-callback-return
            moviesGenres.genres.map((genre) => { 
              if(data.genre_ids.includes(genre.id)) {
                return `  ${genre.name}`
              }
            })
          }
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieCard
