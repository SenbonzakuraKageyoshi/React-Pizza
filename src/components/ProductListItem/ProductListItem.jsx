import React from 'react';
import ProductOptions from '../ProductOptions/ProductOptions';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/SelectedProducts/SelectedProductsSlice';
import './product-list-item.css'

const ProductListItem = ({id, productName, productPrice, productImg}) => {
  const dispatch = useDispatch();

  let options = {type: 'тонкое', size: 25};

  const optionsClickHandler = ({target}, name, parentName) => {
    const parent = target.closest(`.${parentName}`);
    parent.querySelector(`.${name.split(' ').join('.')}`).classList.remove('active');
    target.classList.add('active');
    if(parentName === 'product-type'){
      options.type = target.innerHTML;
    }else if(parentName === 'product-size'){
      options.size = target.innerHTML;
    }
  };

  return (
    <li className="product__list-item">
        <img src={productImg} alt="" />
        <h1 className="product-title">{productName}</h1>
        <ProductOptions optionsClickHandler={optionsClickHandler}/>
        <div className="product__footer">
            <div className="product-price">{productPrice} Р</div>
            <button className="add-product" onClick={() => dispatch(addProduct({id, productName, productPrice, productImg, options, number: 0}))}>Добавить <span className="product-addded-value"></span></button>
        </div>
    </li>
  )
}

export default ProductListItem