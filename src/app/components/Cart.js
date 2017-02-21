import React from 'react';

export default function Cart({
  name,
  price,
  color,
  size,
  id,
  category,
  removeProduct
}) {
  return (
    <div className="panel">
         <div className="panel__img">
           <img src="" role="presentation"/>
         </div>
         <div className="panel__content">
           <div className="panel__content--header item">
             <h2>{name}</h2>
             <span className="product-category">{category}</span>
             <p>Color: {color}</p>
             <p>Size: {size}</p>
           </div>
           <div className="panel__content--action">
             <span className="price">${price}</span>
             <button className="btn__add-to-cart" value={id}
                     onClick={removeProduct}>REMOVE</button>
           </div>
         </div>
    </div>
  );
}
