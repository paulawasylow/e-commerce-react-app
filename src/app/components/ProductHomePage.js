import React from 'react';

export default function ProductHomePage({ product }) {

  return (
    <div className="panel">
      <div className="panel__img">
        <img src="" role="presentation"/>
      </div>
      <div className="panel__content">
        <div className="panel__content--header item">
          <h2>{product.name}</h2>
          <span className="product-category">{product.category}</span>
          <p>{product.description}</p>
        </div>
        <div className="panel__content--action">
          <span className="price">${product.price}</span>
        </div>
      </div>
    </div>
  );
}

ProductHomePage.PropTypes = {
  price: React.PropTypes.number,
  name: React.PropTypes.string,
  description: React.PropTypes.string,
  category: React.PropTypes.string
}
