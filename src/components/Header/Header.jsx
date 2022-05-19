import React from 'react';
import Logo from '../../images/logo/logo.svg';
import { useSelector } from 'react-redux';
import './header.css'

const Header = () => {

    const selectedProductsNumber = useSelector((state) => state.SelectedProductsSlice.length)

  return (
    <header className="header">
        <div className="container">
            <div className="header__content">
                <div className="logo">
                    <img src={Logo} alt="" />
                    <div className="logo__text">
                        <h1 className="logo-title">REACT PIZZA</h1>
                        <h2 className="logo-subtitle">самая вкусная пицца во вселенной</h2>
                    </div>
                </div>
                <div className="header__actions">
                    <a href="" className="header__actions-item">
                        <span className="total-price">0 Р</span>
                        <span className="cart-item-value">{selectedProductsNumber}</span>
                    </a>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header