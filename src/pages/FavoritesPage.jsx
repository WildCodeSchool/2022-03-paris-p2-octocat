import FavoritesList from '../components/FavoritesList';
import Footer from '../components/homepage/Footer'
import Navbar from '../components/homepage/Navbar';

function FavoritesPage() {
  return (
    <>
      <Navbar />
      <div className='pl-4 py-4 sm:mx-32 '>
        <div className='pb-10'>
          <h2 className='text-4xl font-bold'>Favorites</h2>
          <div className='font-light'>Find your saved movies and watch them all !</div>
        </div>
        <div>
          <FavoritesList />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default FavoritesPage