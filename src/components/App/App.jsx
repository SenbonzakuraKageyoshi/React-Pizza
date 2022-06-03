import React from 'react';
import Header from '../Header/Header';
import Catalog from '../Catalog/Catalog';
import Cart from '../Cart/Cart';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { Route, Routes } from 'react-router-dom';
import '../../css/style.css'

const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Catalog />} />
      <Route path="/cart" element={<Cart />}/>
      <Route path="*" element={<NotFoundPage />}/>
    </Routes>
    </>
  )
}

export default App