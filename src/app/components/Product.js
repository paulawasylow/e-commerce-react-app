import React from 'react';
import Label from './Label';
import Input from './Input';

export default function Product({
  product,
  onAddToCart,
  onChangeSize,
  onChangeColor,
  isChecked,
  quantity
}) {

  const hasProduct = product.quantity > 0;

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
      <div className="panel__content--options item">
        <ul className="checkboxes">
          { product.colors.map(color =>
          <li key={color}>
            <Input inputName={'addedColor'}
                   inputType={'checkbox'}
                   inputChecked={isChecked}
                   inputValue={color}
                   onChange={onChangeColor}
                   />
                 <Label>{color}
          </Label></li>) }
        </ul>
        <ul className="checkboxes">
          { product.sizes.map(size =>
          <li key={size}>
            <Input inputName={'addedSize'}
                   inputType={'checkbox'}
                   inputChecked={isChecked}
                   inputValue={size}
                   onChange={onChangeSize}
                   />
                 <Label>{size}
          </Label></li>) }
        </ul>
      </div>
      <div className="panel__content--action">
        <span className="price">${product.price}</span>
        <button className="btn__add-to-cart" value={product.id}
             onClick={onAddToCart}
             disabled={hasProduct ? false : true}>
             { hasProduct ? `ADD TO CART` : `SOLD` }</button>
      </div>
    </div>
</div>
  );
}

Product.PropTypes = {
  price: React.PropTypes.number,
  sizes: React.PropTypes.array,
  colors: React.PropTypes.array,
  name: React.PropTypes.string,
  description: React.PropTypes.string,
  category: React.PropTypes.string
}
