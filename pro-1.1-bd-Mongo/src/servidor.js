const express = require("express");
const roteador = require("../router/index");
const indermediario = require("./intermediario");


const app = express();
app.use(express.json());
app.use(roteador);
app.use(indermediario);


module.exports = app;