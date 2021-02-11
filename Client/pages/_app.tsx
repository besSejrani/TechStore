import React from "react";

import { Provider } from "react-redux";
import { store } from "../Redux/store";
import Layout from "../Layout/index";
import "bootstrap/dist/css/bootstrap.min.css";

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default App;
