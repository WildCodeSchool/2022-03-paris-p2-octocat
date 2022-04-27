import FavoriteItem from './FavoriteItem';

function FavoritesList() {

  const favorites = JSON.parse(localStorage.getItem('favorites'));
  console.log('favorites',favorites)

  return (
    <div className='flex sm:flex-wrap sm:gap-x-10 h-screen'>
      {favorites.map((favorite) => 
        {
        return <FavoriteItem movieId={favorite.id} />
        }
      )}
    </div>
  )
}

export default FavoritesList