import http from "http";
const server = http.createServer((req, res) => {
  //   console.log(req.url);
  if (req.url === "/") {
    res.writeHead(200, "Ok", { "Content-Type": "text/html" });
    res.end("<h1>Home page 🏠</h1>");
  } else if (req.url === "/about") {
    res.writeHead(200, "Ok", { "Content-Type": "text/html" });
    res.end("<h1>About page</h1>");
  } else if (req.url === "/project") {
    res.writeHead(200, "Ok", { "Content-Type": "text/html" });
    res.end(`<a href = "/about">About page</a>`);
  } else {
    res.writeHead(404, "Bad", { "Content-Type": "text/html" });
    res.end("<h2>404 page not found :(</h2>");
  }
});

server.listen(8000, () => console.log("server up"));
