/* const express = require("express"); */
import express from "express"

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("HOLA DESDE EL SERVIDOR!");
});

app.get("/formularios", (req, res) => {
    res.send("esta es la pagina de contacto!");
  });
  

app.listen(port, () => {
  console.log(`OK EN EL PUERTO  http://localhost:${port}`);
});