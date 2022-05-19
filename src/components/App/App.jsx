import React from 'react';
import Header from '../Header/Header';
import Catalog from '../Catalog/Catalog';
import Cart from '../Cart/Cart';
import { Route, Routes } from 'react-router-dom';
import '../../css/style.css'

const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Catalog />} />
      <Route path="/cart" element={<Cart />}/>
    </Routes>
    </>
  )
}

export default App