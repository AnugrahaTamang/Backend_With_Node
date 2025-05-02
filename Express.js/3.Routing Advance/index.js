import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.send("I am from Home page");
});
//Nested Route
app.get("/about/post", (req, res) => {
  res.send("<h1> I am from about page post.");
});
//Search Route
app.get("/anugraha/", (req, res) => {
  res.send("Hello Anugraha Tamang ");
});
//Route Parameters
app.get("/project/:name", (req, res) => {
  const { name } = req.params;
  res.send(`Project Name is ${name}`);
});
//Multiple Route Parameters
app.get("/user/:userid/book/:bookid", (req, res) => {
  const { userid, bookid } = req.params;
  res.send(`Userid is ${userid}. Book name is ${bookid}`);
});
//pass value through router parameter.
app.get("/admin/:adminid-:bookid", (req, res) => {
  const { adminid, bookid } = req.params;
  res.send(`Admin id ${adminid}. Bookid ${bookid}`);
});
//Query Route
app.get("/search?name&age", (req, res) => {
  res.send(req.params); //localhost://8000/search/name=anugraha & age=22
});
app.listen(8000, () => console.log("server up"));

//Advance route with next method
app.get(
  "/advance",
  (req, res, next) => {
    res.send("I am from advance one");
    next();
  },
  (req, res) => {
    res.send("I am from advance two");
  }
);

//Example two
const one = (req, res, next) => {
  res.send("HELLO ONE");
  next();
};
const two = (req, res, next) => {
  res.send("HELLO TWO");
  next();
};
const three = (req, res, next) => {
  res.send("HELLO THREE");
  next();
};

app.get("/four", [one, two, three]);
