import React, {useEffect} from 'react';
import CartListItem from '../CartListItem/CartListItem';
import {useSelector, useDispatch} from 'react-redux';
import { setProducts } from '../../store/SelectedProducts/SelectedProductsSlice';
import './cart-list.css';

const CartList = () => {

  const selectedProducts = useSelector((state) => state.SelectedProductsSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts())
  }, [])


  return (
    <ul className="cart__list">
      {selectedProducts.map((selectedProduct) => (
        <CartListItem key={selectedProduct.id} id={selectedProduct.id} options={selectedProduct.options} productNumber={selectedProduct.number} productName={selectedProduct.productName} productPrice={selectedProduct.productPrice} productImg={selectedProduct.productImg}/>
      ))}
    </ul>
  )
}

export default CartList