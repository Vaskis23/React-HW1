import React from 'react';
import ReactDOM from 'react-dom/client';
import Heading from './Heading';
import Food from './Food';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const menuItems = [
  {
    image: 'img/Pizza-Margherita.jpeg',
    name: 'Пицца Маргарита',
    price: 650,
    ingredients: ['Томатный соус', 'Моцарелла', 'Свежий базилик'],
  },
  {
    image: 'img/gamburger.webp',
    name: 'Гамбургер',
    price: 450,
    ingredients: ['Говядина', 'Сыр', 'Салат', 'Огурец', 'Лук'],
  },
  {
    image: 'img/Pasta-Karbonara.jpg',
    name: 'Паста Карбонара',
    price: 500,
    ingredients: ['Паста', 'Бекон', 'Яичный желток', 'Сыр Пармезан'],
  },
];

root.render(
  <React.StrictMode>
    <Heading text="Restaurant Menu"/>
    {menuItems.map((item) => (
      <Food key={item.name} {...item} />
    ))}
  </React.StrictMode>
);

reportWebVitals();
