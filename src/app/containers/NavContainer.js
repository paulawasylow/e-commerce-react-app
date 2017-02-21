import React, { Component } from 'react';
import { Link } from 'react-router';
import { data } from '../API/data';
import Navigation from '../components/Navigation';

class NavContainer extends Component {

  static propTypes = {
    categories: React.PropTypes.array,
    category: React.PropTypes.object
  }

  state = {
    products: []
}

  componentDidMount() {
    this.setState({products: data});
  }

  render() {
    const { products } = this.state;
    const categories = products
      .map((type) => type.category)
      .reduce((filtered, cat) => filtered.includes(cat) ? filtered : [...filtered, cat], []);

    return (
      <div>
        <Navigation>
          <div className="">
          <nav className="navigation">
            <ul className="navigation__links">
              <li className="home"><Link to="/">Home</Link></li>
              { categories.map(category =>
                <li className="links" key={category}>
                  <Link to={`/${category}`}>{category}</Link>
                </li>
              )}
            </ul>
          </nav>
          </div>
        </Navigation>
      </div>
    );
  }
}

export default NavContainer;
