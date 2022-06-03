import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { setProducts } from '../../store/SelectedProducts/SelectedProductsSlice';
import ProductList from '../ProductList/ProductList';
import './catalog.css'

const Catalog = () => {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(setProducts())
  }, [])

  return (
    <section className="section-catalog">
        <div className="container">
            <header className="section-catalog__header">
                <h1 className="section-catalog__title">Все пиццы</h1>
            </header>
            <div className="section-catalog__content">
                <ProductList />
            </div>
        </div>
    </section>
  )
}

export default Catalog