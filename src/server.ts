import config from "./config";
import app from "./app";
import http from "http";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";

process.on("uncaughtException", (err: Error) => {
  console.log("UNCAUGHT EXCEPTION 💥 Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

const PORT = config.apiPort;

const server = http.createServer(app);

async function startServer() {
  const apolloServer = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
  });

  const { url } = await startStandaloneServer(apolloServer, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
}

startServer();

server.listen(PORT, () =>
  console.log(`Server Running on http://localhost:${PORT}`)
);

process.on("unhandledRejection", (err: Error) => {
  if (err.name === "MongoServerError") {
    console.log("UNHANDLED REJECTION! 💥 Shutting down...");
    console.log(err.name, err.message);
    server.close(() => {
      process.exit(1);
    });
  }
});
