import { createContext, useContext, useReducer } from 'react';
import { cartReducer } from './Reducer';
const products = require('../components/eshop/products.json')

const Cart = createContext();

const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart:[]
  });

  return <Cart.Provider value={{ state, dispatch}}>{children}</Cart.Provider>;
};

export default CartContext

export const CartState = () => {
  return useContext(Cart)
}