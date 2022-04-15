import React from 'react'

function MovieCard({data}) {
  return (

    <>
      <div className='relative rounded-md overflow-hidden flex justify-start items-end shrink-0 sm:mr-8 sm:w-80 bg-no-repeat bg-contain sm:hover:scale-125 sm:ease-in-out sm:duration-300' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`}}>
        <div className='absolute w-full h-full pt-20 sm:pl-4'>
          <div className='card icons flex justify-between items-center w-1/4'>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 hover:opacity-90 " viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
          <div className='font-bold sm:text-lg'>{data.original_title}</div>
          <div className='font-light sm:text-sm'>Adventure, action, drama</div>
        </div>
      </div>
    </>
    
  )
}

export default MovieCard