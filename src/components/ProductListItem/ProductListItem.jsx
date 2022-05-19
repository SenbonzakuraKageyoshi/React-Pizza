import React from 'react';
import ProductOptions from '../ProductOptions/ProductOptions';
import './product-list-item.css'

const ProductListItem = ({id, productName, productPrice, productImg}) => {
  return (
    <li className="product__list-item">
        <img src={productImg} alt="" />
        <h1 className="product-title">{productName}</h1>
        <ProductOptions />
        <div className="product__footer">
            <div className="product-price">от {productPrice} Р</div>
            <button className="add-product">Добавить <span className="product-addded-value"></span></button>
        </div>
    </li>
  )
}

export default ProductListItem