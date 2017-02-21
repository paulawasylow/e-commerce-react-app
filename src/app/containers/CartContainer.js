import React, { Component } from 'react';
import Cart from '../components/Cart';

class CartContainer extends Component {

  static propTypes = {
    addedProducts: React.PropTypes.array,
    product: React.PropTypes.object
  }

  render() {
    const { addedProducts, addedSize, addedColor, removeProduct } = this.props;
    const productsInCart = addedProducts !== -1 ? (addedProducts.map(product =>
      <Cart key={product.id}
                {...product}
            size={addedSize}
            color={addedColor}
            removeProduct={removeProduct}
            />)) : `Cart is empty`;

    const getPrices = addedProducts.map(product => product.price);
    const sumPrices = getPrices.reduce((total, price) => {
      return total + price
    }, 0);
    const checkInventory = addedProducts.map(product => product.quantity !== -1);
    const countProducts = addedProducts.length > 1 || addedProducts.length === 0 ? `You have ${addedProducts.length} products` : `You have ${addedProducts.length} product`;

  return (
    <div>
      <div className="panel shopping__cart--header">
        <h1>Shopping Cart</h1>
          <p>
            {countProducts}
          </p>
      </div>
      <div className="panel__list">
       { productsInCart }
      </div>
      <div className="shopping__cart--total">
        <span className="shopping__cart--title-total">Total:</span> <span className="shopping__cart--price-total">{ sumPrices > 0 ? `$${sumPrices}` : 0 }</span>
        <div className="shopping__cart--btn-buy">
          { addedProducts.length > 0 && <button className="btn-buy" disabled={checkInventory ? false : true}>{checkInventory ? `BUY` : `You can not buy, no products in inventory`}</button> }
        </div>
      </div>
    </div>
  );
 }
}

export default CartContainer;
