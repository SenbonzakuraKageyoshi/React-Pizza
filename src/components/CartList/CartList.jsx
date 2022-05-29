import React from 'react';
import CartListItem from '../CartListItem/CartListItem';
import {useSelector} from 'react-redux';
import './cart-list.css';

const CartList = () => {

  const selectedProducts = useSelector((state) => state.SelectedProductsSlice);

  return (
    <ul className="cart__list">
      {selectedProducts.map((selectedProduct) => (
        <CartListItem key={selectedProduct.id} types={selectedProduct.types} sizes={selectedProduct.sizes} id={selectedProduct.id} options={selectedProduct.options} productNumber={selectedProduct.number} productName={selectedProduct.productName} productPrice={selectedProduct.defaultPrice} productImg={selectedProduct.productImg}/>
      ))}
    </ul>
  )
}

export default CartList