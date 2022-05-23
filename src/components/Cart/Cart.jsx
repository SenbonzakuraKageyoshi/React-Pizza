import React from 'react';
import {useSelector} from 'react-redux'
import CartList from '../CartList/CartList';
import './cart.css';

const Cart = () => {

  const selectedProducts = useSelector((state) => state.SelectedProductsSlice);
  console.log(selectedProducts)

  return (
    <section className="section-cart">
        <div className="container">
            <header className="cart__header">
                <h1 className="section-cart__title">Корзина</h1>
                <button className="clear-cart-btn">Очистить корзину</button>
            </header>
            <div className="section-cart__content">
                <CartList />
            </div>
        </div>
    </section>
  )
}

export default Cart