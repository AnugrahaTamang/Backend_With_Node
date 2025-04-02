import * as fs from "fs";
//way of writing callback
//promise api and callback api working is same but the way of writing syntax is different. we don't need to use try and catch block
fs.mkdir("e:\\Nodeone", (error) => {
  if (error) throw error;
  console.log("directory is created....");
});
