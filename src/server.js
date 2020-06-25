require("dotenv").config();
const express = require("express");
const cors = require("cors");
const server = express();

const router = require("./router");

server.get("/", (req, res) => {
  res.json({ message: "Bienvenido a mi API" });
});

server.use(express.json());
server.use(cors());
server.use(router);

server.listen(3001, () => {
  console.log("Server runnig");
});
