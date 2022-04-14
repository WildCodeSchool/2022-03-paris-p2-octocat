import React from 'react'
import MovieCard from './MovieCard'

function MovieSlider() {
  return (
    <>
      <div className='flex justify-between'>
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