let fs = require("fs");

fs.writeFileSync("file.txt", "to make new file and write text in it use it");

fs.appendFileSync("file.txt", "\n   to write more text use appendFile");

////////////////to read file
const data = fs.readFileSync("file.txt");
console.log(data.toString());
////////////////////////asynchronous

fs.writeFile(
  "asyFile.txt",
  "to write asynchronous file same method follow ut write asynFie",
  (err) => {
    console.log(err);
  }
);

fs.appendFile(
  "asyFile.txt",
  "\n \n \nto write asynchronous file same method follow ut write asynFie append child",
  (err) => {
    console.log(err);
  }
);

fs.readFile("asyFile.txt", "UTF-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
