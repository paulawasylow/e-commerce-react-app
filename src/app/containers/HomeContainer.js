import React, { Component } from 'react';
import { data } from '../API/data';
import ProductHomePage from '../components/ProductHomePage';

class HomeContainer extends Component {

  static propTypes = {
    products: React.PropTypes.array,
    product: React.PropTypes.object
  }

  state = {
    products: []
  }

  componentDidMount() {
    this.setState({products: data });
  }

  render() {
    const { products } = this.state;
    const getProductsHomePage = products.map(product => {
      return (<ProductHomePage key={product.id}
                               product={product}
                               {...this.props}
                               />);
    });
    const takeLastFourProducts = getProductsHomePage.slice(-4);

    return (
      <div className="wrapper">
        <div className="home-page__header">
          <div className="panel home-page__header--title">
            <h1>New products</h1>
          </div>
        </div>
        <div className="panel__list">
        {takeLastFourProducts}
        </div>
      </div>
    );
  }
}

export default HomeContainer;
