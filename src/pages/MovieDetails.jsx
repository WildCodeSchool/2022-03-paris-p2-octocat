import Navbar from "../components/homepage/Navbar";
import Footer from "../components/homepage/Footer";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
const axios = require('axios');

function MovieDetails() {

  const movieId = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const getDetails = `https://api.themoviedb.org/3/movie/${movieId.id}?api_key=0aba5a6d503daa5780b386d6fd32a451`;
  const imgSrc = `https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`;
  const imdbHref = `https://www.imdb.com/title/${movieDetails.imdb_id}`;
  
  useEffect(() => {
    axios.get(getDetails)
    .then((res) => {
      return res.data;
    })
    .then((data) => {
      setMovieDetails(data);
    })
  },[]);

  console.log("movieDetails",movieDetails);

  return (
    <>
      <Navbar />
        <div className="py-4 sm:pr-12">
          <div className="relative object-covertext-center sm:w-screen sm:flex sm:justify-center ">
              <img alt='poster' className="" src={imgSrc}></img>
              <button className="absolute pl-16 inset-1/4 sm:inset-y-1/4 sm:pl-80">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 sm:h-40 sm:w-40 opacity-50" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </button>
          </div>
          <div className="pl-8 py-12 sm:flex sm:items-start sm:justify-evenly sm:gap-40 sm:w-full ">
            <div className="flex flex-col justify-center sm:w-2/4 sm:pl-20">
              <h1 className="font-bold text-left text-3xl pb-2 sm:text-7xl sm:pl-0 ">{movieDetails.original_title}</h1>
              <div className="flex pb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <div className="py-4 sm:w-full">{movieDetails.overview}</div>
            </div>
            <div className="flex flex-col justify-start items-start sm:justify-start sm:items-start sm:pl-18">
              <div className="rounded-md shadow pb-10">
                <button
                  className="flex justify-center items-center px-6 py-2 border-2 text-base font-medium rounded-md text-white bg-transparent transition duration-500 ease-in-out w-full sm:hover:scale-125"
                >
                <p className="pr-2">Add</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                </button>
              </div>
              <div className="flex justify-start items-start pb-10 sm:w-full">
                {/* {
                moviesGenres.genres.map((genre) => { 
                  if(data.genre_ids.includes(genre.id)) {
                    return `  ${genre.name}`
                  }
                  })
                } */}
                <button className="bg-stone-700 px-2 py-2 mr-3 opacity-70">Action</button>
                <button className="bg-stone-700 px-2 py-2 opacity-70">Aventure</button>
              </div>
              <div className="grid gap-2 grid-cols-2 grid-rows-4">
                <div className="font-semibold">Release date :</div>
                <div>{movieDetails.release_date}</div>
                <div className="font-semibold">Country :</div>
                <div>
                  {/* {movieDetails.production_countries.length > 0 && (
                    movieDetails.production_countries.map((country) => 
                      country.name
                    )
                  )} */}
                </div>
                <div className="font-semibold">Original language :</div>
                <div>{movieDetails.original_language}</div>
                <button className="font-semibold flex justify-start">
                  <span className="bg-amber-400 w-12 h-6 text-neutral-900 font-black">
                  <a href={imdbHref}>IMDB</a>
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pl-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                  </svg>
                </button>      
            </div>
          </div>
        </div>
        </div>
      <Footer />
    </>
  )
}

export default MovieDetails