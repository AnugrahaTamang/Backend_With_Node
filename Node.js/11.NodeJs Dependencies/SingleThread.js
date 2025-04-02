// single threaded code called the blocking code.
import fs from "fs";
console.log("start");
let data = fs.readFileSync("text.txt");
console.log(data);
console.log("End");
// initialize program
// import modules
//register the callbacks
//start the event loop

//result
// start
// file content
//end
