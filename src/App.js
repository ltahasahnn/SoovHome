import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider, useDispatch } from 'react-redux'
import React from 'react'

import { store } from './store/index.js'

import Article2 from './components/Article2'
import Article3 from './components/Article3'
import All from './components/All'
import AboutUs from './components/AboutUs.js'
import Models from './components/Models.js'
import Load from './components/Load.js'
import ContactUs from './components/ContactUs.js'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Load />} />
        <Route path="/home" element={<All />} />
        <Route path="/article" element={<Article3 />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/models" element={<Models />} />
      </Routes>

    </BrowserRouter>
  )
}

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;
