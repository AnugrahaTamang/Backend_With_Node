import http from "http";
const server = http.createServer((req, res) => {
  //   console.log(req);
  //   console.log(res);
  //   res.statusCode = 202;
  //   res.statusMessage = "Good";
  //   res.setHeader("Content-Type", "text/plain");
  //shorthand for status(code, message and header)
  res.writeHead(202, "Good", { "Content-Type": "text/html" });
  res.end("<h1>Hello Nepal</h1>");
});
server.listen(8000, () => console.log("server running on port 8000"));
