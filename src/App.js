import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/review' element={<OrderReview />} />
          <Route path='/inventory' element={<Inventory />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
