import React from 'react';
import './cart-list-item.css';
import test from '../../images/product1.png'

const CartListItem = () => {
  return (
    <li className="cart__list-item">
      <img src={test} alt="" width={80} height={80} className="cart__list-item-img" />
      <div className="cart__list-item__main">
        <div className="cart__list-item-descr">
          <h1 className="cart__list-item-name">Сырный цыпленок</h1>
          <h2 className="cart__list-item-params">тонкое тесто, 26 см.</h2>
        </div>
        <div className="cart__list-item-quantity">
          <button className="remove-quantity-value"></button>
          <div className="quantity-value">0</div>
          <button className="add-quantity-value"></button>
        </div>
        <div className="price-value">0 Р</div>
        <button className="remove-cart-item"></button>
      </div>
    </li>
  )
}

export default CartListItem