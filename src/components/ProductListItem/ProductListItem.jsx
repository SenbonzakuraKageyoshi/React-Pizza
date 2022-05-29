import React from 'react';
import ProductOptions from '../ProductOptions/ProductOptions';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/SelectedProducts/SelectedProductsSlice';
import './product-list-item.css'

const ProductListItem = ({id, productName, sizes, types, defaultPrice, productPrice, productImg, products, setProducts}) => {

  const dispatch = useDispatch();
  const product = products[products.findIndex((item) => item.id === id)]

  const optionsClickHandler = ({target}, name, parentName, overprice, optionId) => {
    if(!target.classList.contains('active')){
      const parent = target.closest(`.${parentName}`);
      parent.querySelector(`.${name.split(' ').join('.')}`).classList.remove('active');
      if(parentName === 'product-type'){
        target.classList.add('active');
        product.types[product.types.findIndex((type) => type.default === true)].default = false;
        product.types[optionId].default = true;
        product.typeOverprice = overprice
        product.defaultPrice = product.productPrice + product.overprice;
      }else if(parentName === 'product-size'){
        target.classList.add('active');
        product.sizes[product.sizes.findIndex((size) => size.default === true)].default = false;
        product.sizes[optionId].default = true;
        product.sizeOverprice = overprice
        product.defaultPrice = product.productPrice + product.overprice;
      }
      product.defaultPrice = product.productPrice + product.typeOverprice + product.sizeOverprice;
      setProducts([...products]) 
    }
  };

  return (
    <li className="product__list-item">
        <img src={productImg} alt="" />
        <h1 className="product-title">{productName}</h1>
        <ProductOptions types={types} sizes={sizes} optionsClickHandler={optionsClickHandler}/>
        <div className="product__footer">
            <div className="product-price">{defaultPrice} Р</div>
            <button className="add-product" onClick={() => dispatch(addProduct({id: Math.floor(Math.random(60)*2314789), sizes, types, productName, defaultPrice, productPrice, productImg, number: 1}))}>Добавить <span className="product-addded-value"></span></button>
        </div>
    </li>
  )
}

export default ProductListItem