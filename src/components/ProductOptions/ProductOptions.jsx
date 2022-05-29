import React from 'react';
import './product-options.css'

const ProductOptions = ({sizes, types, optionsClickHandler}) => {
  return (
    <div className="product-options">
      <div className="product-type">
        {types.map((type, index) => (
          type.default ? 
          <button key={type.typeName} className="product-type__select-btn active" onClick={(e) => optionsClickHandler(e, 'product-type__select-btn active', 'product-type', type.overprice, index)}>{type.typeName}</button>
          :
          <button key={type.typeName} className="product-type__select-btn" onClick={(e) => optionsClickHandler(e, 'product-type__select-btn active', 'product-type', type.overprice, index)}>{type.typeName}</button>
        ))}
      </div>
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