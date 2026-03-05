/**
 * HTTP Server with Basic Routing
 * 
 * Creates a simple HTTP server that handles routing based on request URLs.
 * The server listens on port 3000 and responds with different content
 * depending on the requested path:
 * - "/" returns "Home Page"
 * - "/about" returns "About Page"
 * - Any other path returns "404 Page Not Found"
 * 
 * @requires http - Node.js built-in HTTP module
 * @listens 3000 - Server port
 * 
 * @example
 * // Start the server and visit:
 * // http://localhost:3000/ - displays Home Page
 * // http://localhost:3000/about - displays About Page
 * // http://localhost:3000/any-other-path - displays 404 Page Not Found
 */
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Home Page");
  } else if (req.url === "/about") {
    res.write("About Page");
  } else {
    res.write("404 Page Not Found");
  }
  res.end();
});

server.listen(3000);
//