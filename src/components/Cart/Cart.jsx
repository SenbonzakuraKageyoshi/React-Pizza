import React, {useMemo} from 'react';
import {Link} from'react-router-dom'
import {useSelector ,useDispatch} from 'react-redux';
import { clearCart } from '../../store/SelectedProducts/SelectedProductsSlice';
import CartList from '../CartList/CartList';
import EmptyCart from '../../images/cart/empty-cart.svg'
import './cart.css';

const Cart = () => {

  const dispatch = useDispatch()
  const selectedProducts = useSelector((state) => state.SelectedProductsSlice)

  const length = useMemo(() => {
    return selectedProducts.length;
  });

  const sum = useMemo(() => {
    return selectedProducts.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.productPrice;
    }, 0)
  })

  return (
    <section className="section-cart">
        <div className="container">
          {length !== 0 
          ? 
         <>
          <header className="cart__header">
          <h1 className="section-cart__title">Корзина</h1>
          <button className="clear-cart-btn" onClick={() => dispatch(clearCart())}>Очистить корзину</button>
          </header>
          <div className="section-cart__content">
            <CartList />
          </div>
          <footer className="cart__footer">
          <div className="cart__footer-top">
          <div className="products-quntity">
            Всего пицц: <span className="products-quntity-value">{length} шт</span>
          </div>
          <div className="total-price">
            Сумма заказа: <span className="total-pricey-value">{sum} Р</span>
          </div>
          </div>
          <div className="cart__footer-bottom">
          <Link to="/" className='cart__footer-link'>Вернуться назад</Link>
          <button className="cart__footer-pay-btn">Оплатить сейчас</button>
          </div>
          </footer>
      </>
      :
      <div className="cart-empty__content">
                <h1 className="cart-empty-title">Корзина пустая</h1>
                <p className="cart-empty-descr">Вероятней всего, вы не заказывали ещё пиццу.
                Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
                <img src={EmptyCart} alt="" className="cart-empty-img" />
                <Link to='/' className='cart-empty-link'>Вернуться назад</Link>
              </div>
        }
        </div>
    </section>
  )
}

export default Cart