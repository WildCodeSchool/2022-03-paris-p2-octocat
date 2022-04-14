import React, { useState, useEffect } from 'react';
import Banner from '../components/homepage/Banner';
import MovieSlider from '../components/homepage/MovieSlider';
const axios = require('axios');


const HomePage = () => {


  const API_URL = `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`;
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
    .then((res) => {
      return res.data;
    })
    .then((data) => {
      setMovieList(data.results)
    })
  },[]);


  return (
    <>
      <div>HomePage</div>
      <Banner />
      <MovieSlider />
    </>
  )
}

export default HomePage