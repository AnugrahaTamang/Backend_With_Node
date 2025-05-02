import express from "express";
const app = express();
app.listen(3000, () => console.log("server up"));
app.set("view engine", "ejs"); //Note: if your folder name is not views then you have to do. (app.set("views", "./folderName"))
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/about", (req, res) => {
  const user = [
    { name: "anugraha tamang", age: 22, location: "Nepal" },
    { name: "ramit tamang", age: 23, location: "rampur" },
    { name: "vandai", age: 13, location: "canada" },
    { name: "ramu", age: 1233, location: "usa" },
  ];
  const item = ["apple", "banana", "mango", "pineapple"];
  res.render("about", {
    title: "about page",
    message: "welcome to ejs",
    item,
    data: user,
  });
});
app.get("/form", (req, res) => {
  res.render("form");
});
app.use(express.urlencoded({ extended: false })); //Note:form and json data middleware
app.post("/submit", (req, res) => {
  const name = req.body.name; //form data and json data accept garnalai body request used.
  const message = `Hello My name is ${name}. submitted by form.`;
  res.send(message);
});

// EJS Template Partials: benefit of partials is reusability.
app.get("/partials", (req, res) => {
  res.render("partial");
});

app.use(express.static("public")); //This middleware is used to static file
