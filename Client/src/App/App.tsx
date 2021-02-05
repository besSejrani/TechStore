import React, { useEffect, lazy, Suspense } from "react";

// Redux
import { useDispatch } from "react-redux";
import { setProducts, getItemCart } from "../Redux/product/actions";

import { items } from "../Data/productData";

import { CircularProgress } from "@material-ui/core";

// React-Router-Dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Normal Import
import Home from "../Pages/Home";
import Layout from "../Layout";

// Import Lazy
const About = lazy(() => import("../Pages/About"));
const Products = lazy(() => import("../Pages/Products"));
const Cart = lazy(() => import("../Pages/Cart"));
const Contact = lazy(() => import("../Pages/Contact"));
const SingleProduct = lazy(() => import("../Pages/SingleProduct"));
const NotFound = lazy(() => import("../Pages/404"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(items));
    dispatch(getItemCart());
  });

  return (
    <Router>
      <Switch>
        <Layout>
          <Suspense fallback={<CircularProgress />}>
            <Route path="/products/:id" exact component={SingleProduct} />
            <Route path="/products" exact component={Products} />
            <Route path="/about" exact component={About} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/" exact component={Home} />
            {/* <Route component={NotFound} /> */}
          </Suspense>
        </Layout>
      </Switch>
    </Router>
  );
};

export default App;
