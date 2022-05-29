import React from 'react';
import './product-options.css'

const ProductOptions = ({sizes, optionsClickHandler}) => {
  return (
    <div className="product-options">
        <div className="product-size">
        {sizes.map((size, index) => (
            size.default ? 
            <button key={size.sizeValue} className="product-size__select-btn active" onClick={(e) => optionsClickHandler(e, 'product-size__select-btn active', 'product-size', size.overprice, index)}>{size.sizeValue} см</button>
            :
            <button key={size.sizeValue} className="product-size__select-btn" onClick={(e) => optionsClickHandler(e, 'product-size__select-btn active', 'product-size', size.overprice, index)}>{size.sizeValue} см</button>
          ))}
        </div>
    </div>
  )
}

export default ProductOptions