
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsList from './components/ProductsList';
import ProductDetail from './components/ProductDetail';
import NotFoundPage from './components/NotFoundPage';
import './App.css';

const App = () => {
  return (
    <Router basename='Introduction.to.frameworks-JavaScript_Kt4'>
      <Routes>
      <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;