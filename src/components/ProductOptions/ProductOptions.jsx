import React from 'react';
import './product-options.css'

const ProductOptions = ({optionsClickHandler}) => {
  return (
    <div className="product-options">
        <div className="product-type">
            <button className="product-type__select-btn active" onClick={(e) => optionsClickHandler(e, 'product-type__select-btn active', 'product-type')}>тонкое</button>
            <button className="product-type__select-btn" onClick={(e) => optionsClickHandler(e, 'product-type__select-btn active', 'product-type')}>традиционное</button>
        </div>
        <div className="product-size">
            <button className="product-size__select-btn active" onClick={(e) => optionsClickHandler(e, 'product-size__select-btn active', 'product-size')}>25 см</button>
            <button className="product-size__select-btn" onClick={(e) => optionsClickHandler(e, 'product-size__select-btn active', 'product-size')}>30 см</button>
            <button className="product-size__select-btn" onClick={(e) => optionsClickHandler(e, 'product-size__select-btn active', 'product-size')}>40 см</button>
        </div>
    </div>
  )
}

export default ProductOptions