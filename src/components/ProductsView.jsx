import {useState} from 'react'
import ProductContext from '../contexts/ProductContext';
import ProductsCategories from './ProductsCategories'
import ProductsList from './ProductsList'
const products = require('./products.json');

function ProductsView() {

  const [productsList, setProductsList] = useState(products);
  console.log(productsList)

  return (
    <ProductContext.Provider value={{productsList:productsList}}>
      <ProductsCategories/>
      <ProductsList/>
    </ProductContext.Provider>
  )
}

export default ProductsView