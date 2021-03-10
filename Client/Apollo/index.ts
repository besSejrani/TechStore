import { ApolloClient, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { createUploadLink } from "apollo-upload-client";
import {getUI} from "./state/ui/index"


// const token = localStorage.getItem("token");

const link = createUploadLink({
  uri: "http://localhost:4000/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them

  if (token) {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  }
});

export const client = new ApolloClient({
  link: authLink.concat(link),
  connectToDevTools: true,
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
}),
});
