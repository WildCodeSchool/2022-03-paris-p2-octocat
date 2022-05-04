import React from 'react'
import coke from '../assets/images/coke.png'
import hotdog from '../assets/images/hotdog.png'
import groceries from '../assets/images/groceries.png'

function ProductsCategories() {
  return (
    <div class="flex items-center sm:justify-center">
      <button type="button" className="w-full sm:flex sm:flex-col sm:items-center font-bold px-4 py-2 sm:w-1/5 sm:mr-10 ">
        <div className='pb-2 sm:hover:bg-gray-600 sm:hover:rounded-full sm:py-4 sm:px-4'>
          <img src={groceries} alt="hot dog"/>
        </div>
          All
      </button>
      <button className="w-full sm:flex sm:flex-col sm:items-center font-bold px-4 py-2 sm:w-1/5 sm:mr-10">
        <div className='pb-2 sm:hover:bg-gray-600 sm:hover:rounded-full sm:py-4 sm:px-4'>
          <img src={hotdog} alt="hot dog"/>
        </div>
          Food
      </button>
      <button className="w-full sm:flex sm:flex-col sm:items-center font-bold px-4 py-2 sm:w-1/5 sm:mr-10">
        <div className='pb-2 sm:hover:bg-gray-600 sm:hover:rounded-full sm:py-4 sm:px-4'>
          <img src={coke} alt="coke with straw"/>
        </div>
        Drinks
      </button>
    </div>
  )
}

export default ProductsCategories