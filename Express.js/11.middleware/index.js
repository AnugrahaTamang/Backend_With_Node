import express from "express";
const app = express();
app.listen(3000, () => console.log("server up"));

//creating middleware(yadhi mathi banako vay duitaima middleware use hunthyo tar yasma chai aba about ma matra use hunxa)
app.use((req, res, next) => {
  console.log("Hello From Middleware");
  console.log(`${req.method} and ${req.url}`);
  next();
});
app.get("/", (req, res) => {
  res.send("<h1>Home page</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>About page</h1>");
});
//creating another middleware
const middleware = (req, res, next) => {
  const d = new Date();
  console.log(`Time: ${d.getHours()} and Minutes: ${d.getMinutes()}`);
  next();
};
//creating another middlewaRE
const middleOne = (req, res, next) => {
  console.log("hello one");
  next();
};
app.get("/project", middleware, middleOne, (req, res) => {
  res.send("<h1> I am from Project directory... </h1>");
});
//best of way of creating middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("something broke!");
  next();
});

//Another way of implementation the middleware
// const router = express.Router();
// router.use((req, res, next) => {
//   console.log("Router level Middleware");
//   next();
// });

// router.get("/resume", (req, res) => {
//   res.send("<h1> I am from the resume </h1>");
// });
// router.get("/one", (req, res) => {
//   res.send("<h1>I am from One </h1>");
// });
// app.use("/", router);
// app.use("/test", router) //Note: nested route ... you have to specify the /test for access any route

//ExpressJS: Built-in Middleware
//1. express.json()
//2. express.urlencoded()
//3. express.static()
//Example : app.use(express.json())
