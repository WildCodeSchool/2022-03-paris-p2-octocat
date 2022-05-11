import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProductItem({...product}) {

  const navigate = useNavigate();

  return (
    <div
      key={product.id} className="group flex flex-col items-center ">
      <div className="w-48 h-80 aspect-w-1 aspect-h-1 overflow-hidden">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="w-full h-full rounded-md object-contain group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
      <p className="mt-1 text-lg font-medium">{product.price}</p>
      <button 
      onClick={() => navigate('/shop/cart')}
      className='w-full flex gap-2 font-bold justify-end pr-6'>
        Add
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
    </div>
  )
}

export default ProductItem