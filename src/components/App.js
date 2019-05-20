import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../page/Home";
import About from "../page/About";
import Products from "../page/Products";
import NotFound from "../page/404";
import Layout from "../layout";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Layout />
          <main>
            <Switch>
              <Route path="/products" exact component={Products} />
              <Route path="/about" exact component={About} />
              <Route path="/" exact component={Home} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </Router>
      </>
    );
  }
}

export default App;
