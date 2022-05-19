import React from 'react';
import './cart.css'

const Cart = () => {
  return (
    <section className="section-cart">
        <div className="container">
            <header className="cart__header">
                <h1 className="section-cart__title">Корзина</h1>
                <button className="clear-cart-btn">Очистить корзину</button>
            </header>
        </div>
    </section>
  )
}

export default Cart