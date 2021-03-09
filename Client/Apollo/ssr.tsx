import withApollo from "next-with-apollo";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      uri: "http://localhost:4000/graphql",
      cache: new InMemoryCache().restore(initialState || {}),
      ssrMode: typeof window === "undefined",
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    },
  }
);
