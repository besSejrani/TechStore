import withApollo from "next-with-apollo";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import {getUI} from "./state/ui"

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      uri: "http://localhost:4000/graphql",
      cache: new InMemoryCache({ 
        typePolicies: {
          Query: {
            fields: {
              getUI: {
                read() {
                  return getUI();
                },
              },
            },
          },
        },
  }).restore(initialState || {}),
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
