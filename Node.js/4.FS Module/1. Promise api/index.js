import { error, log } from "console";
import * as fs from "fs/promises";
// Creating directory
try {
  const data = await fs.mkdir("e:\\Nodejs\\Courses", { recursive: true });
  console.log(data);
  console.log("file created sucessfully...");
} catch (error) {
  console.log(error);
}
//Reading the directory
try {
  const readdir = await fs.readdir("e:\\Nodejs\\Courses");
  console.log(readdir);
  console.log("read successfully");
} catch (error) {
  console.log(error);
}
// writng the file
try {
  const writeone = fs.writeFile(
    "e:\\Nodejs\\Courses\\one.txt",
    "I am Anugraha Tamang. I love Nepal"
  );
  console.log(writeone);
  console.log("write sucessfully");
} catch (error) {
  console.log(error);
}
// reading file
try {
  const readOne = await fs.readFile("e:\\Nodejs\\Courses\\one.txt", "utf-8");
  console.log(readOne);
  console.log("read sucessful");
} catch (error) {
  console.log(error);
}
// appending the file
try {
  const appendOne = await fs.appendFile(
    "e:\\Nodejs\\Courses\\one.txt",
    "Hello, Where are you from?"
  );
  console.log(appendOne);
  console.log("append successfully");
} catch (error) {
  console.log(error);
}
//reading once more
try {
  const readOne = await fs.readFile("e:\\Nodejs\\Courses\\one.txt", "utf-8");
  console.log(readOne);
  console.log("read sucessful");
} catch (error) {
  console.log(error);
}
//copy file
try {
  const info = await fs.copyFile(
    "e:\\Nodejs\\Courses\\one.txt",
    "e:\\Nodejs\\Courses\\data.txt"
  );
  console.log(info);
  console.log("copy sucessful");
} catch (error) {
  console.log(error);
}
//reading the copy file
try {
  const info = await fs.readFile("e:\\Nodejs\\Courses\\data.txt", "utf-8");
  console.log(info);
  console.log("reading sucessful");
} catch (error) {
  console.log(error);
}

//Get information
try {
  const info = await fs.stat("e:\\Nodejs\\Courses\\data.txt");
  //   console.log(info); returns object
  console.log(info.isDirectory()); //false
  console.log(info.isFile()); //true
} catch (error) {
  console.log(error);
}
