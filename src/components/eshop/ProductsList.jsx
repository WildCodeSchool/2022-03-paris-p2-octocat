import React from 'react'
import ProductContext from '../../contexts/ProductContext';
import {useContext, useState} from 'react';
import ProductItem from './ProductItem';

function ProductsList() {

  const products = useContext(ProductContext)

  console.log('products', products)

  return (
    <ProductContext.Consumer>
    {value =>
      <div className="max-w-2xl mx-auto py-16 px-4 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.filteredList.map((product) =>
              <ProductItem {...product} />
            )}
          </div>       
      </div>
    }
    </ProductContext.Consumer>
  )
}

export default ProductsList