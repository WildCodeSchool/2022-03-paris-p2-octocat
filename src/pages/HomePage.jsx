import Banner from '../components/homepage/Banner';
import MovieSlider from '../components/homepage/MovieSlider';
import Navbar from '../components/homepage/Navbar';
import Footer from '../components/homepage/Footer';


const HomePage = () => {

  const API_URL_TRENDINGWEEK = `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`;
  const API_URL_TOPRATED = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=vote_count.desc`;
  const API_URL_TOPSERIES = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}`;
  const API_URL_UPCOMING = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;

  return (
    <>
      <Navbar />
      <Banner />
      <div className='flex flex-col'>
        <MovieSlider title="Trending this week..." dataSource={API_URL_TRENDINGWEEK} />
        <MovieSlider title="Top rated movies" dataSource={API_URL_TOPRATED} />
        <MovieSlider title="Top rated TV shows" dataSource={API_URL_TOPSERIES} />
        <MovieSlider title="Upcoming" dataSource={API_URL_UPCOMING} />
      </div>     
      <Footer />
    </>
  )
}

export default HomePage