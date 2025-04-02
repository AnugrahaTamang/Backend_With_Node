import http, { ServerResponse } from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("./project/home.html", (error, data) => {
      if (error) throw error;
      res.end(data);
    });
  } else if (req.url === "/about") {
    fs.readFile("./public/about.html", (error, data) => {
      if (error) throw error;
      res.end(data);
    });
  } else {
    res.end("<h1>Not found page </h1>");
  }
});

server.listen(8000, () => console.log("server up"));
