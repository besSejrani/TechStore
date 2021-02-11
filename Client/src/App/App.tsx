import React, { useEffect, lazy, Suspense } from "react";

// Redux
import { useDispatch } from "react-redux";
import { setProducts, getItemCart } from "../Redux/product/productAction";

import { items } from "../Data/productData";

import { CircularProgress } from "@material-ui/core";

// React-Router-Dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Normal Import
import Home from "../Pages/Home";
import Layout from "../Layout";

// Import Lazy
const Products = lazy(() => import("../Pages/Products"));
const Checkout = lazy(() => import("../Pages/Checkout"));
const Contact = lazy(() => import("../Pages/Contact"));
const SingleProduct = lazy(() => import("../Pages/SingleProduct"));
const PageNotFound = lazy(() => import("../Pages/404"));

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
            <Route path="/cart" exact component={Checkout} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/" exact component={Home} />
            {/* <Route component={PageNotFound} /> */}
          </Suspense>
        </Layout>
      </Switch>
    </Router>
  );
};

export default App;
