import express from "express";
const app = express();
import session, { Cookie } from "express-session";
import MongoStore from "connect-mongo";
app.use(
  session({
    secret: "secretpassword",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 }, //one hour
    store: MongoStore.create({
      mongoUrl: "mongodb://127.0.0.1:27017/sessiondb",
      collectionName: "mysessions",
    }),
  })
);
app.get("/", (req, res) => {
  res.send("<h1>Home page</h1>");
});
app.get("/set-username", (req, res) => {
  req.session.username = "Anugraha";
  res.send("<h1>Username has been set in session...</h1>");
});
app.get("/get-username", (req, res) => {
  if (req.session.username) {
    res.send(`<h1>Username from session is : ${req.session.username}</h1>`);
  } else {
    res.send(`<h1>No username found in session.</h1>`);
  }
});
app.get("/destroy", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).send("failed to destroy session");
    } else {
      res.send("<h1>Session destroy successfuly. </h1>");
    }
  });
});
app.listen(3000, () => {
  console.log("server running on port 3000");
});
