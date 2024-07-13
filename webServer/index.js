const http = require("http");
// const url=require("url")
const server = http.createServer((req, res) => {
  ///////req.url (/contact,/about etc)
  if (req.url == "/") {
    res.end("Hello from other site  look");
  } else if (req.url == "/about") {
    res.end("Hello from About page");
  } else if (req.url == "/contact") {
    res.end("Hello from contact page");
  } else if (req.url == "/product") {
    res.write("Hello from product page");
    res.end();
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>Hello from error page</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to portal 8000");
});

///////////////routing
