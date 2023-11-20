
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Rating from './Rating';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return React.createElement('p', null, 'Loading...');
  }

  return React.createElement('div', { className: 'product-detail-container' },
    React.createElement('h2', null, product.title),
    React.createElement('img', { src: product.image, alt: product.title, className: 'product-image' }),
    React.createElement('div', { className: 'product-info' },
      React.createElement('p', { className: 'price' }, `Price: $${product.price}`),
      React.createElement('p', { className: 'description' }, `Description: ${product.description}`),
      React.createElement('p', { className: 'rating' }, 'Rating: ', React.createElement(Rating, { rating: product.rating.rate })),
      React.createElement(Link, { to: '/products', className: 'back-button' }, 'Назад')
    )
  );
};

export default ProductDetail;
