import React from 'react';
import ProductOptions from '../ProductOptions/ProductOptions';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/SelectedProducts/SelectedProductsSlice';
import './product-list-item.css'

const ProductListItem = ({id, sizes, productName, defaultPrice, productPrice, productImg, products, setProducts}) => {
  const dispatch = useDispatch();
  
  const optionsClickHandler = ({target}, name, parentName, overprice, sizeId) => {
    if(!target.classList.contains('active')){
      const parent = target.closest(`.${parentName}`);
      parent.querySelector(`.${name.split(' ').join('.')}`).classList.remove('active');
      target.classList.add('active');
      const product = products[products.findIndex((item) => item.id === id)]
      product.defaultPrice = product.productPrice + overprice;
      setProducts([...products])
      sizes[sizes.findIndex((size) => size.default === true)].default = false;
      sizes[sizeId].default = true;
    }
  };

  return (
    <li className="product__list-item">
        <img src={productImg} alt="" />
        <h1 className="product-title">{productName}</h1>
        <ProductOptions sizes={sizes} optionsClickHandler={optionsClickHandler}/>
        <div className="product__footer">
            <div className="product-price">{defaultPrice} Р</div>
            <button className="add-product" onClick={() => dispatch(addProduct({id, sizes, productName, defaultPrice, productPrice, productImg, number: 1}))}>Добавить <span className="product-addded-value"></span></button>
        </div>
    </li>
  )
}

export default ProductListItem