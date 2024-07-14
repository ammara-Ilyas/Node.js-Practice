const http = require("http");
const fs = require("fs");

const server = http.createServer();
server.on("request", (req, res) => {
  //   fs.readFile("input.txt", "utf8", (err, data) => {
  //     if (err) return console.log(err);
  //     res.end(data);
  //   });
  //2nd way
  const readStrem = fs.createReadStream("input.txt");
  readStrem.on("data", (chunkData) => {
    res.write(chunkData);
    res.end();
  });
  readStrem.on("error", (err) => {
    res.write("404 error, page is not found");
    res.end();
  });
});

server.listen(8000, "127.0.0.1");
