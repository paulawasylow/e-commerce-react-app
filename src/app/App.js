import React, { Component } from 'react';
import './App.css';
import NavContainer from './containers/NavContainer';
import Footer from './components/Footer';

class App extends Component {
  static propTypes: {
    children: React.PropTypes.element.isRequired
  }

  render() {
    return (
      <div className="App">
        <NavContainer />
        <main className="wrapper__main">
          <div>{this.props.children}</div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
