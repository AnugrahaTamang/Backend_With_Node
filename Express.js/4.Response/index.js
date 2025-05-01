import express from "express";
const app = express();
app.set("view engine", "ejs");
app.listen(3000, () => console.log("server up"));
app.get("/", (req, res) => {
  res.send("<h1>I am from home page</h1>");
});
app.get("/get", (req, res) => {
  res.json({
    name: "anugraha tamang",
    age: 22,
  });
});
app.get("/redirect", (req, res) => {
  res.redirect("/get");
});
//if you render the html page. you have to install the ejs template
app.get("/user", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

//dowload the file or pdf or video or image or excel
// app.get("/dowload", (req, res) => {
//   res.download("./files/one.png", "rename file");
// });

//another way for dowload the file
app.get("/dowload", (req, res) => {
  res.sendFile(__dirname + "/files/one.png");
});

app.get("/check", (req, res) => {
  console.log(res.headerSent); //undefined
  res.send("Hello");
  console.log(res.headersSent); //response true
});

app.get("/onecheck", (req, res) => {
  res.set("custom-header", "Hello Nepal");
  console.log(res.get("custom-header")); //output: Hello Nepal
  res.send("Header Set");
});
