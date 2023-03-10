import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Category from './components/Category/Category'
import SingleProduct from './components/SingleProduct/SingleProduct'
import Newsletter from './components/Footer/Newsletter/Newsletter'
import AppContext from './utils/context'

const App = () => {
  return (
    <BrowserRouter>
      <Route>
        <Route path="/" element={} />
        <Route path="/category/:id" element={} />
      </Route>
    </BrowserRouter>
  );
}

export default App