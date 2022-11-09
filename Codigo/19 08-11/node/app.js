/* const frutas = require ("./frutas.js") */ //node
/* import frutas from "./frutas.js"
console.log(frutas) */

/* const http = require("http"); */
import http from "http"

const port = 3030;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>hola mundo!</h1>");
});

    server.listen(port, () => {
  console.log(`server en el puerto ${port}`);
});