import React, { Component } from 'react';
import ProductListContainer from './ProductListContainer';
import { data } from '../API/data';

class CategoryContainer extends Component {

    static propTypes = {
      products: React.PropTypes.array,
      product: React.PropTypes.object
    }

    state = {
      products: []
    }

  componentDidMount() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.setState({products: data});
  }

  render() {
    const { products } = this.state;
    const byCategoryOnRoute = this.props.params.category;
    const productsByCategoryOnChangeRoute = products.filter(product => product.category === byCategoryOnRoute);

    return (
      <div>
        <ProductListContainer title={byCategoryOnRoute}
                              products={productsByCategoryOnChangeRoute}
                              />
      </div>
    );
  }
}

export default CategoryContainer;
