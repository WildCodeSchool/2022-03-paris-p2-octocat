import React from 'react'
import MovieCard from './MovieCard'

function MovieSlider() {
  return (
    <>
      <div className='flex justify-evenly h-40'>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </>

  )
}

export default MovieSlider