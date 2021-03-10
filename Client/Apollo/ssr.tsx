import withApollo from "next-with-apollo";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import { ui } from "./state/ui";

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      uri: "http://localhost:4000/graphql",
      cache: new InMemoryCache({
        typePolicies: {
          Query: {
            fields: {
              ui: {
                read() {
                  return ui();
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
