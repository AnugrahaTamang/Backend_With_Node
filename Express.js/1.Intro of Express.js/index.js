//create folder
//npm init -y
//npm i express
// create instance express
//provide port number
//basic route
import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.writeHead(202, "good", { "Content-Type": "text/html" });
  res.send(
    "<section> <h1> Hello Nepal </h1> <h2> I love Nepal</h2> </section>"
  );
});
app.listen(8000, () => console.log("server up"));
