import FavoritesList from '../components/FavoritesList';
import Footer from '../components/homepage/Footer'
import Navbar from '../components/homepage/Navbar';

function FavoritesPage() {
  return (
    <>
      <Navbar />
      <div className='pl-4 py-4'>
        <div className='text-xl font-bold'>Favorites</div>
        <div className='font-light'>Find your saved movies and watch them all !</div>
      </div>
      <div className='flex flex-wrap h-full gap-y-8 mt-2.5 justify-center'>
        <FavoritesList />
      </div>
      <Footer />

    </>
  )
}

export default FavoritesPage