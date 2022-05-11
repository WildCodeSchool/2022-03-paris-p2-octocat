import Navbar from '../components/homepage/Navbar';
import Footer from '../components/homepage/Footer';
import ProductsView from '../components/eshop/ProductsView';

function EshopPage() {

  return (
    <>
    <Navbar/>
    <div className='py-4 flex flex-col px-4 w-screen text-gray-50 sm:px-14'>
      <div className='flex flex-col sm:flex-row sm:justify-between'>
        <div className='flex flex-col align-start justify-start '>
          <h2 className="text-3xl pb-4 font-bold text-red-600">Fakeflix shop</h2>
          <h3 className="text-xl font-normal pb-10">Order something before your movie starts !</h3>
        </div>  
      </div>
      <ProductsView />
    </div>
    <Footer/>
  </>
  )
}

export default EshopPage