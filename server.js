const express = require('express');

const recipeRouter = require("./reciepeRouter");

const server = express();

server.use(express.json());
server.use("/api/recipes", recipeRouter);

module.exports = server;