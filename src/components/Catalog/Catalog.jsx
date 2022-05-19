import React from 'react';
import ProductList from '../ProductList/ProductList';
import './catalog.css'

const Catalog = () => {
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