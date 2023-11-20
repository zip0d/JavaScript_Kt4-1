
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return React.createElement('div', null,
    React.createElement('h2', null, '404 - Страница не найдена'),
    React.createElement('p', null, 'Извините, мы не смогли найти запрашиваемую страницу.'),
    React.createElement(Link, { to: '/products' },
      React.createElement('button', null, 'Вернуться к товарам')
    )
  );
};

export default NotFoundPage;
