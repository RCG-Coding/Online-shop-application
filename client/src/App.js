import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './container/Header.js'
import ProductListing from './container/ProductListing.js';
import ProductDetail from './container/ProductDetail.js';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<ProductListing/>}></Route>
          <Route path='/product/:proId' element={<ProductDetail/>}></Route>
          <Route>404 Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
