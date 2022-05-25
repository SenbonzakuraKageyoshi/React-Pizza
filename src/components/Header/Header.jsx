import React from 'react';
import Logo from '../../images/logo/logo.svg';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
import './header.css'

const Header = () => {

    let selectedProductsNumber = useSelector((state) => state.SelectedProductsSlice.length);

    if(selectedProductsNumber === 0 && JSON.parse(localStorage.getItem('selectedProducts'))){
        selectedProductsNumber = JSON.parse(localStorage.getItem('selectedProducts')).length
    }

  return (
    <header className="header">
        <div className="container">
            <div className="header__content">
                <div className="logo">
                    <Link to="/">
                    <img src={Logo} alt="" />
                    </Link>
                    <div className="logo__text">
                        <h1 className="logo-title">REACT PIZZA</h1>
                        <h2 className="logo-subtitle">самая вкусная пицца во вселенной</h2>
                    </div>
                </div>
                <div className="header__actions">
                    <Link to="/cart" className="header__actions-item">
                        <span className="total-price">0 Р</span>
                        <span className="cart-item-value">{selectedProductsNumber ? selectedProductsNumber : 0}</span>
                    </Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header