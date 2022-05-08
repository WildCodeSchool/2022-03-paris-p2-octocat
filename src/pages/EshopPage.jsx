import Navbar from '../components/homepage/Navbar';
import Footer from '../components/homepage/Footer';
import ProductsView from '../components/eshop/ProductsView';
import { Outlet } from 'react-router-dom'

function EshopPage() {

  return (
    <>
    <Navbar/>
    <div className='py-4 px-4 w-screen text-gray-50 sm:px-14'>
      <div className='flex justify-between'>
        <h2 className="text-3xl pb-4 font-bold text-red-600">Fakeflix shop</h2>
      </div>
      <h3 className="text-xl font-normal pb-10">Order something before your movie starts !</h3>
      <ProductsView />
    </div>
    <Footer/>
  </>
  )
}

export default EshopPage