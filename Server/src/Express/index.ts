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

// Oauth2
import passport from "passport";
import githubAuth from "../Routes/githubOauth";
import githubService from "../Services/passportGithub";
import googleAuth from "../Routes/googleOauth";
import googleService from "../Services/passportGoogle";

// CORS Configuration
const corsOptions = {
  origin: `http://localhost:3000`,
  credentials: true,
};

// ========================================================================================================

const main = async () => {
  try {
    const app = express();
    app.use(express.json());

    await mongo();
    await githubService();
    await googleService();

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(githubAuth);
    app.use(googleAuth);

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
