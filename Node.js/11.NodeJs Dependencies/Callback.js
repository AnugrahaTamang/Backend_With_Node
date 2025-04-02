import fs from "fs";
console.log("program start");
fs.readFile("test.txt", (err, res) => {
  err ? console.log(err) : console.log(res.toString());
});
console.log("program end");

//result
//program start
//program end
//file content
