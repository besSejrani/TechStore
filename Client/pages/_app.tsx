import React from "react";
// Layout
import Layout from "../Layout/index";

// Redux
import { Provider } from "react-redux";
import { store } from "../Redux/store";

// Apollo
import { ApolloProvider } from "@apollo/client";
import { client } from "../Apollo/index";

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
