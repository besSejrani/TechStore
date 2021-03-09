import React from "react";

// Layout
import Layout from "../Layout/index";

//Styles
import "../App/index.css";

// Redux
import { Provider } from "react-redux";
import { store } from "../Redux/store";

// Apollo
import { client } from "../Apollo/index";
import { ApolloProvider } from "@apollo/client";
// ========================================================================================================

const App = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
