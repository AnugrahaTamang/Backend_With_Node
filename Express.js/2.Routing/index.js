import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.writeHead(202, "OK", { "Content-Type": "text/html" });
  res.end("<h2> Hello Home. I love the Nepal</h2>");
});
app.get("/contact", (req, res) => {
  res.send("<h1>I am from contact page</h1>");
});
app.get("/article", (req, res) => {
  res.send("<h1>I am from Article</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>I am from About page</h1>");
});
app.listen(8000, () => console.log("server up"));
