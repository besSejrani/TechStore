import React, { Component } from "react";

import { items } from "../data/productData";
import { connect } from "react-redux";
import { setProducts, getItemCart } from "../actions";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../page/Home";
import About from "../page/About";
import Products from "../page/Products";
import Cart from "../page/Cart";
import Contact from "../page/Contact";
import SingleProduct from "../page/SingleProduct";
import NotFound from "../page/404";
import Layout from "../layout";

class App extends Component {
  componentDidMount = () => {
    this.props.setProducts(items);
    this.props.getItemCart();
  };

  decrement = id => {
    console.log(id);
  };

  render() {
    return (
      <>
        <Router>
          <Layout>
            <Switch>
              <Route path="/products/:id" exact component={SingleProduct} />
              <Route path="/products" exact component={Products} />
              <Route path="/about" exact component={About} />
              <Route path="/cart" exact component={Cart} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/" exact component={Home} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </Router>
      </>
    );
  }
}

export default connect(
  null,
  { setProducts, getItemCart }
)(App);
