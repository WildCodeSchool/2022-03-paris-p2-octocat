import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

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
  
  return (
    <>
      <div onClick={handleClick} className='cursor-pointer z-10 relative rounded-md overflow-hidden flex justify-start items-end shrink-0 mr-8 w-80 h-40 bg-no-repeat bg-cover sm:hover:scale-110 sm:ease-in-out sm:duration-300' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`}}>
        <div className='absolute w-full h-full pt-12 pl-4'>
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
          <div className='font-bold sm:text-lg'>
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
