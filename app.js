const http = require("http");

// Create a simple HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!\n");
});

// Define the port on which the server will listen
const PORT = 3000;

// Start the server and listen on the defined port
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
