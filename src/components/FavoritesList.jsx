import MovieCard from './homepage/MovieCard';
import { useEffect, useState } from 'react';
import FavoriteItem from './FavoriteItem';
const axios = require('axios');

function FavoritesList() {

  // je dois récupérer tout ce qu'il y a dans localStorage
  const favorites = JSON.parse(localStorage.getItem('favorites'));
  console.log('favorites',favorites)
  
  // j'ai ma liste d'id de films et je veux les détails de ces films
  
  // afficher chaque film sous forme de moviecard

  return (
    <div className='flex flex-wrap h-screen'>
      {favorites.map((favorite) => 
        {
        return <FavoriteItem movieId={favorite.id} />
        }
      )}
    </div>
  )
}

export default FavoritesList