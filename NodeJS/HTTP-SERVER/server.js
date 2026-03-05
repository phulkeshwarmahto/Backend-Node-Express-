/**
 * HTTP Server Module
 * Creates a simple Node.js HTTP server that responds with a greeting message
 * 
 * @requires http - Node.js built-in HTTP module for creating servers
 * 
 * @description
 * - Creates an HTTP server using http.createServer()
 * - Server listens on port 3000
 * - Responds to all incoming requests with "Hello from Node Server"
 * - res.end() is required to signal the end of the response; without it, the browser will keep loading
 * 
 * @example
 * // Run the server with: node server.js
 * // Access it at: http://localhost:3000
 * 
 * @param {Object} req - The incoming HTTP request object
 * @param {Object} res - The outgoing HTTP response object
 * @returns {void}
 */

const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello from Node Server");
  res.end(); //Without this → browser keeps loading ❌
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
