
import React from 'react';
import PropTypes from 'prop-types';
import './Rating.css';

const Rating = ({ rating }) => {
  const roundedRating = Math.round(rating);

  const stars = Array.from({ length: 5 }, (_, index) => {
    const starClass = index < roundedRating ? 'star-filled' : 'star-empty';
    return (
      React.createElement('span', { key: index, className: starClass }, '★')
    );
  });

  return React.createElement('div', { className: 'rating' }, stars);
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
