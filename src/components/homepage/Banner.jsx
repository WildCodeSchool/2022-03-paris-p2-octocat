import { useEffect, useState } from 'react';
const axios = require('axios');

const Banner = () => {

  const [randomMovie, setRandomMovie] = useState([]);
  const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1`;


  useEffect(() => {
    axios.get(API_URL)
    .then((res) => {
      return res.data;
    })
    .then((data) => {
      setRandomMovie(data.results[Math.floor(Math.random() * 20)])
    })
  },[]);

  const [isDesktop, setDesktop] = useState(window.innerWidth > 390);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 390);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return window.removeEventListener("resize", updateMedia);
  });

  const posterURLDesktop = `https://image.tmdb.org/t/p/original/${randomMovie.backdrop_path}`;
  const posterURLMobile = `https://image.tmdb.org/t/p/original/${randomMovie.poster_path}`;

 
  return (
    
    <> 
      <div className="h-[70vh] mt-10 flex align-center sm:justify-start bg-no-repeat bg-cover bg-center top-0" style={{backgroundImage:`url(${isDesktop ? (posterURLDesktop) : (posterURLMobile)})`}}>
          <div className="px-8 flex justify-center flex-col sm:px-40 sm:py-30 sm:h-full sm:w-full sm:justify-start sm:align-start sm:flex-col bg-neutral-800/75">
            <h1 className="font-bold text-center pt-20 text-3xl sm:text-7xl sm:text-left sm:w-2/5">
              <span className="block sm:inline">{randomMovie.original_title}</span>
            </h1>
            <div className='flex flex-col-reverse sm:flex-col'>
              <p className="text-center tracking-wide font-medium mt-3 text-base sm:text-left sm:px-0 sm:w-1/2">
                {randomMovie.overview}
              </p>
              <div className="flex px-8 pt-8 justify-center align-center sm:justify-start sm:px-0">
                <div className="pr-6">
                  <button className="flex px-6 py-2 transition ease-in duration-200 uppercase rounded-full border-transparent bg-red-600 hover:bg-red-800"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 pr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                      Play
                  </button>
                </div>
                <div className="rounded-md shadow">
                  <button
                    className="flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-slate-500 transition duration-600 ease-in-out w-full  hover:bg-slate-600"
                  >
                    More info
                  </button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Banner;