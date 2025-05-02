import express, { application } from "express";
const app = express();

app.listen(3000, () => console.log("server up"));
app.set("view engine", "ejs"); //ejs template set
app.use(express.json()); //used to json request inside the server(it's called the middleware)
app.use(express.urlencoded({ extended: false })); //form data request garna lai yo middleware use garinxa

app.get("/", (req, res) => {
  res.send("<h1>This is the Home page </h1>");
});

app.get("/about", (req, res) => {
  res.render("about");
});
//how we can pass request in server
app.post("/one", (req, res) => {
  res.send(req.body); //json data pass garna sakinxa
});
app.post("/form", (req, res) => {
  res.send(req.body);
});
app.get("/a", (req, res) => {
  res.send(req.hostname);
});
app.get("/all", (req, res, next) => {
  res.send(req.protocol);
});
app.get("/route/:userid", (req, res) => {
  res.send(req.route);
});

app.get("/check", (req, res) => {
  if (req.accepts("html")) {
    res.send("<h1>Hello Nepal</h1>");
  } else if (req.accepts("json")) {
    res.send({ message: "Hello json" });
  } else if (req.accepts("xml")) {
    res.send("<message>HELLO XML </message>");
  } else {
    res.send("Content type not supported.");
  }
});
//server information
app.get("/serverinfo", (req, res) => {
  res.send(req.headers);
});
//request check
app.post("/checkone", (req, res) => {
  if (req.is("application/json")) {
    res.send("Valid JSON data");
  } else if (req.is("text/html")) {
    res.send("HTML Data");
  } else {
    res.status(400).send("unsupported content-type");
  }
});
