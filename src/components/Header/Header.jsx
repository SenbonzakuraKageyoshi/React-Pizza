import React, {useMemo} from 'react';
import Logo from '../../images/logo/logo.svg';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
import './header.css'

const Header = () => {

    const selectedProducts = useSelector((state) => state.SelectedProductsSlice);

    let length = useMemo(() => {
        return selectedProducts.length;
    });
  
    const sum = useMemo(() => {
        if(JSON.parse(localStorage.getItem('selectedProducts'))){
            return JSON.parse(localStorage.getItem('selectedProducts')).reduce(function (accumulator, currentValue) {
                return accumulator + currentValue.productPrice;
            }, 0)
        }else{
            return 0;
        }
    })

    if(selectedProducts.length === 0 && JSON.parse(localStorage.getItem('selectedProducts'))){
        length = JSON.parse(localStorage.getItem('selectedProducts')).length
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
                        <span className="total-price">{sum} Р</span>
                        <span className="cart-item-value">{selectedProducts ? length : 0}</span>
                    </Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header