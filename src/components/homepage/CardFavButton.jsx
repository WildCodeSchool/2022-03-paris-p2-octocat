import { useEffect, useState } from "react";

function CardFavButton({data}) {

    ////////// handle favorite feature

    let oldFavorites = localStorage.getItem('favorites') !== null ? JSON.parse(localStorage.getItem('favorites')) : [];  // useState for favorite button
    const [isFavorite, setIsFavorite] = useState(null);
  
    // make the favorite button state to persist
    
    useEffect(() => {
      setIsFavorite(oldFavorites.find(movie => movie.id === data.id))
    },[data.id])
  
    // handle local storage on click
    
    const handleOnClick = () => {
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
    <div>            
      <button
      onClick={handleOnClick}
      >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:opacity-75" fill={isFavorite ? '#EAB308' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
      </button>
    </div>
  )
}

export default CardFavButton