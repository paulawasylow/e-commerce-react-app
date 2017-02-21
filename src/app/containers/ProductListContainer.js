import React, { Component } from 'react';
import Input from '../components/Input';
import Label from '../components/Label';
import Product from '../components/Product';
import CartContainer from './CartContainer';

class ProductListContainer extends Component {

    static propTypes = {
      products: React.PropTypes.array,
      title: React.PropTypes.string
    }

    state = {
      filteredProducts: [],
      addedProducts: [],
      isCheckedColor: '',
      isCheckedSize: '',
      isFiltering: false,
      isChecked: false,
      keywordSearch: ''
    }

  componentWillReceiveProps(nextProps) {
    if (this.state.isFiltering) {
      this.setState({
        filteredProducts: this.sortByLowerPrice(nextProps.products) && this.onSearchFilterProducts(nextProps.products)
      });
    }
  }

  onSearchFilterProducts = (products) => {
    if (this.state.keywordSearch.length >= 2) {
    return products.filter((product) => {
      return product.name.toLowerCase().search(this.state.keywordSearch.toLowerCase()) !== -1
          || product.colors.indexOf(this.state.keywordSearch) !== -1
          || product.sizes.indexOf(+this.state.keywordSearch) !== -1;
    });
   }
  }

  onChangeSearch = (e) => {
    const keyword = e.target.value;
    if (!keyword) {
      this.setState({ isFiltering: false });
      return;
    }

    this.setState({
      filteredProducts: this.onSearchFilterProducts(this.props.products),
      isFiltering: true,
      keywordSearch: keyword
    });
  }

  sortByLowerPrice = (products) => {
    return [...products].sort((a,b) => a.price < b.price ? -1 : 1);
  }

  filterByLowerPrice = () => {
    if (!this.state.isChecked) {
      this.setState({
      isFiltering: true,
      filteredProducts: this.sortByLowerPrice(this.props.products)
    });
  }
    else {
      this.setState({
        isChecked: !this.state.isChecked,
        isFiltering: false,
        filteredProducts: this.props.products });
    }
  }

  onChangeCheckbox = () => {
    this.setState({ isChecked: !this.state.isChecked });
  }

  onAddToCart = (e) => {
    e.preventDefault();
    const findProduct = this.props.products.find(product => product.id === +e.target.value);

    if (findProduct.quantity > 0) {
    this.setState({
      addedProducts: this.state.addedProducts.concat(findProduct),
      newSize: this.state.isCheckedSize,
      newColor: this.state.isCheckedColor
    });
    }
    return;
  }

  onChangeSize = (e) => {
    if (e.target.checked) {
    this.setState({
      isCheckedSize: +e.target.value
    });
  }
    return;
}

  onChangeColor = (e) => {
    if (e.target.checked) {
    this.setState({
      isCheckedColor: e.target.value
    });
  }
    return;
  }

  removeProduct = (e) => {
    const findIndex = this.state.addedProducts.findIndex(product => product.id === +e.target.value);
    const newAddedProducts = [
      ...this.state.addedProducts.slice(0,findIndex),
      ...this.state.addedProducts.slice(findIndex+1),
    ];
    this.setState({addedProducts: newAddedProducts});
  }

  render() {
    const { isFiltering, filteredProducts, addedProducts, isChecked } = this.state;
    const { products, title } = this.props;
    const productList = [];
    const showProducts = isFiltering ? filteredProducts : products;

    if (products) {
      showProducts.map(product => {
        return productList.push(
          <Product key={product.id}
                   product={product}
                   onAddToCart={this.onAddToCart}
                   onChangeSize={this.onChangeSize}
                   onChangeColor={this.onChangeColor}
                   isChecked={isChecked}
                   {...this.props}
                   />
        );
      });
    }

    if (!products) {
      return (
        <div>
          <h3>{title}</h3>
          <p>No products on this page.</p>
        </div>
      );
    }

  return (
    <div>
    <div className="wrapper-panel__header">
    <div className="panel__header">
      <div className="panel__header--category">
        <h1>Category: <span className="category-title">{title}</span></h1>
      </div>
      <div className="panel__header--search">
      <form className="form__input">
        <Input
          inputType={'text'}
          inputName={'search'}
          inputId={'search'}
          placeholder={'Search product by name OR color OR size...'}
          inputClassName="search__input"
          onChange={this.onChangeSearch}
        />
        <Label
          className="label__checkbox--by-lower-price"
          labelFor={'byLowerPrice'}>Sort by lower price
        <Input
          inputType={'checkbox'}
          inputName={'byLowerPrice'}
          inputId={'checkbox'}
          checked={isChecked}
          inputClassName="checkbox__input"
          onChange={this.onChangeCheckbox}
          onClick={this.filterByLowerPrice}
        /></Label>
      </form>
      </div>
      <div className="panel__header--found">
        <span className="products-found">
          { isFiltering ? `Products found ${filteredProducts.length} of ${products.length}` : `Products ${products.length}`}
        </span>
      </div>
    </div>
  </div>
      <div className="panel__list">
       { productList ? productList : `Nothing found.` }
      </div>
      <div>
        { addedProducts.length > 0 && <CartContainer
                                          removeProduct={this.removeProduct}
                                          addedSize={this.state.newSize}
                                          addedColor={this.state.newColor}
                                          addedProducts={addedProducts}
                                          />
                                      }
      </div>
    </div>
  );
 }
}

export default ProductListContainer;
