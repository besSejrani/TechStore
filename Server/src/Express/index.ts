// Configuration
import "dotenv/config";
import "reflect-metadata";

// Database
import mongo from "../Model/mongo";

// Server
import express from "express";
import { ApolloServer } from "apollo-server-express";

// GraphQL API
import createSchema from "../Graphql/schema";

// ========================================================================================================

// CORS Configuration
const corsOptions = {
  origin: `http://localhost:3000`,
  credentials: true,
};

const main = async () => {
  try {
    await mongo();

    const app = express();

    app.use(express.json());

    const schema = await createSchema();

    const apolloServer = new ApolloServer({
      schema,
      context: ({ req, res }) => ({ req, res }),
      introspection: true,
      playground: {
        settings: {
          "request.credentials": "include",
        },
      },
    });

    apolloServer.applyMiddleware({ app, cors: corsOptions });

    const port = process.env.PORT || 6000;
    app.listen(port, () => console.log(`Server is running on http://localhost:${port}${apolloServer.graphqlPath}`));
  } catch (error) {
    console.log(error.message);
  }
};

main();
