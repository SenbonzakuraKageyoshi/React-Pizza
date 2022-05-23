import React from 'react';
import ProductOptions from '../ProductOptions/ProductOptions';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../../store/SelectedProducts/SelectedProductsSlice';
import './product-list-item.css'

const ProductListItem = ({id, productName, productPrice, productImg}) => {

  const selectedPoroducts = useSelector((state) => state.SelectedProductsSlice);
  console.log(selectedPoroducts)
  const dispatch = useDispatch();

  return (
    <li className="product__list-item">
        <img src={productImg} alt="" />
        <h1 className="product-title">{productName}</h1>
        <ProductOptions />
        <div className="product__footer">
            <div className="product-price">от {productPrice} Р</div>
            <button className="add-product" onClick={() => dispatch(addProduct({id, productName, productPrice, productImg}))}>Добавить <span className="product-addded-value"></span></button>
        </div>
    </li>
  )
}

export default ProductListItem