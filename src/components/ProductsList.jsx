import React from 'react'
import ProductsContext from '../contexts/ProductContext';
import {useContext} from 'react';
import ProductContext from '../contexts/ProductContext'

function ProductsList() {

  const products = useContext(ProductContext)

  return (
    <ProductsContext.Consumer>
    {value =>
      <div className="max-w-2xl mx-auto py-16 px-4 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.productsList.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="w-48 h-80 aspect-w-1 aspect-h-1 overflow-hidden">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full rounded-md object-contain group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm">{product.name}</h3>
                <p className="mt-1 text-lg font-medium">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
    }

    </ProductsContext.Consumer>
  )
}

export default ProductsList