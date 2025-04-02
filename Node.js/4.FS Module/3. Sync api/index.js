import * as fs from "fs";
//create directory
fs.mkdirSync("e:\\Expressjs\\Courses", { recursive: true });
//remove the directory
fs.rmdirSync("e:\\Expressjs\\Courses");
