import {useState, useMemo} from 'react'
import ProductContext from '../../contexts/ProductContext';
import ProductsCategories from './ProductsCategories'
import ProductsList from './ProductsList'
const products = require('./products.json');

function ProductsView() {

  const [productsList, setProductsList] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('');

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  function getFilteredList() {
    if (!selectedCategory || selectedCategory === 'all') {
      return productsList;
    }
    return productsList.filter((item) => item.category === selectedCategory);
  }

  const filteredList = useMemo(getFilteredList, [selectedCategory, productsList]);

  return (
    <ProductContext.Provider value={{filteredList:filteredList}}>
      <ProductsCategories handleCategoryChange={handleCategoryChange}/>
      <ProductsList/>
    </ProductContext.Provider>
  )
}

export default ProductsView