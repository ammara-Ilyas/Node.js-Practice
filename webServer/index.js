const http = require("http");
const fs = require("fs");
const path = require("path");

const { dirname } = require("path");
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
  } else if (req.url == "/userApi") {
    // res.write("Hello from product page");
    const filePath = path.join(__dirname, "userData", "userApi.json");

    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(JSON.parse(data));
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(data);
    });
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>Hello from error page</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to portal 8000");
});

///////////////routing
