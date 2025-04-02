import http from "http";
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h2>Hello I love Nepal. I am Anugraha Tamang</h1>");
  }
});
server.listen(8000, () => console.log("server up");)