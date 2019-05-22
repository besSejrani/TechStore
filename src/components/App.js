import React, { Component } from "react";

import { items } from "../data/productData";
import { connect } from "react-redux";
import { setProducts } from "../actions";

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
  };

  setProdsucts = products => {
    let storeProducts = products.map(item => {
      const { id } = item.sys;
      const product = { id, ...item.fields };

      return product;
    });
    let featuredProducts = storeProducts.filter(item => item.featured === true);

    this.setState({
      storeProducts,
      filteredProducts: storeProducts,
      featuredProducts,
      cart: this.getStorageCart(),
      singleProduct: this.getStorageProduct(),
      loading: false
    });
  };

  getStorageCart = () => {
    return [];
  };

  getStorageProduct = () => {
    return [];
  };

  getTotals = () => {};

  addTotals = () => {};

  syncStorage = () => {};

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
  { setProducts }
)(App);
