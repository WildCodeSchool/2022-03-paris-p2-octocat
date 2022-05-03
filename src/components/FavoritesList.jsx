import FavoriteItem from './FavoriteItem';
import { useCallback, useState } from 'react';

function FavoritesList() {

  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')));

  const removeItem = useCallback((movieId)  => {
    setFavorites(favorites.filter((movie) => movie.id !== movieId));
  }, [favorites]);

  return favorites === null ? "No favorites found !" : (
    <div className='flex sm:flex-wrap sm:gap-x-10 sm:gap-y-10 h-screen pb-32'>
      {favorites.map((favorite) => 
        {
        return <FavoriteItem movieId={favorite.id} removeItem={removeItem} />
        }
      )}
    </div>
  )
}

export default FavoritesList