import React from 'react'

function ProductItem({...product}) {
  return (
    <button 
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
    </button>
  )
}

export default ProductItem