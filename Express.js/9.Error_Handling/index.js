import express from "express";
const app = express();
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/about", (req, res) => {
  try {
    res.render("about");
  } catch (error) {
    res.render("500", { message: error });
  }
});
app.get(
  "/project",
  (req, res, next) => {
    res.send("I Love Nepal");
    next();
  },
  (req, res) => {
    res.send(" I am Dhading....");
  }
);
app.listen(3000, () => console.log("server up"));
