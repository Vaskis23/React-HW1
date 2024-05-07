import React from 'react';

const Food = ({ image, name, price, ingredients }) => {
  return (
    <div className="food-item">
      <img src={image} alt={name} />
      <div className="food-info">
        <h3>{name}</h3>
        <p className="price">${price.toFixed(2)}</p>
        <p className="ingredients">
          <b>Ингредиенты:</b> {ingredients.join(', ')}
        </p>
      </div>
    </div>
  );
};

export default Food;
