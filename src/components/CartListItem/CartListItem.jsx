import React from 'react';
import './cart-list-item.css';
import { useDispatch } from 'react-redux';
import { addNumber, removeNumber, deleteProduct } from '../../store/SelectedProducts/SelectedProductsSlice';

const CartListItem = ({id, productName, productPrice, productImg, productNumber, sizes}) => {

  const dispatch = useDispatch()

  return (
    <li className="cart__list-item">
      <img src={productImg} alt="" width={80} height={80} className="cart__list-item-img" />
      <div className="cart__list-item__main">
        <div className="cart__list-item-descr">
          <h1 className="cart__list-item-name">{productName}</h1>
          <h2 className="cart__list-item-params">{sizes[sizes.findIndex((size) => size.default === true)].sizeValue} см</h2>
        </div>
        <div className="cart__list-item-quantity">
          <button className="remove-quantity-value" onClick={() => dispatch(removeNumber(id))}></button>
          <div className="quantity-value">{productNumber}</div>
          <button className="add-quantity-value" onClick={() => dispatch(addNumber(id))}></button>
        </div>
        <div className="price-value">{productPrice} Р</div>
        <button className="remove-cart-item" onClick={() => dispatch(deleteProduct(id))}></button>
      </div>
    </li>
  )
}

export default CartListItem