const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to home page");
    return;
  }
  if (req.url === "/about") {
    res.end("this is about page");
    return;
  }
  res.end(`<h1> opps</h1`);
});

server.listen(5001);
