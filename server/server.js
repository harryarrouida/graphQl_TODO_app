const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

mongoose
  .connect(
    "mongodb+srv://hamzaarr84:graphql@cluster0.ct6h1y3.mongodb.net/todo?retryWrites=true&w=majority&appName=Cluster0",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(async () => {
    await server.start();
    server.applyMiddleware({ app, path: "/graphql" });
    app.listen(port, console.log("server is running"));
  })
  .catch((err) => console.log("mongodb connection failed: ", err));
