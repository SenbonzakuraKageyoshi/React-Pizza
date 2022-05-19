import React from 'react';
import './product-options.css'

const ProductOptions = () => {
  return (
    <div className="product-options">
        <div className="product-type">
            <button className="product-type__select-btn active">тонкое</button>
            <button className="product-type__select-btn">традиционное</button>
        </div>
        <div className="product-size">
            <button className="product-size__select-btn active">25 см</button>
            <button className="product-size__select-btn">30 см</button>
            <button className="product-size__select-btn">40 см</button>
        </div>
    </div>
  )
}

export default ProductOptions