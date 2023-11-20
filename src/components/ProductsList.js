
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import './ProductsList.css';

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="products-list-container">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <Link to={`/product/${product.id}`} className="product-link">
            <img src={product.image} alt={product.title} className="product-image" />
            <p className="product-title">{product.title}</p>
            <Rating rating={product.rating.rate} />
            <p className="product-price">${product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
