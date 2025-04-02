// In Node.js streams are a way to handle and writing data. They provide a way to work with large amounts of data, such as reading a large file or receiving a large amount of data over a network connection, without loading the entire dataset into memory. Streams can be readable, writable or both and can be used to pipe data between sources and destinations.
import { createReadStream } from "fs";
//by default the size of the buffer is 64kb
//last buffer - remainder
//highWartermark - control size

//The highWaterMark property controls the size of the buffer, we can increase/decrease that
//const stream = createReadStream("./test.txt", {highWaterMark: 1000})

//we can also provide encoding to it, and it will gives us actual content.
const stream = createReadStream("./test.txt", { encoding: "utf8" });
stream.on("data", (data) => {
  console.log(data);
});

/// we also have "error" event, which will fire if we have error 
stream.on("error", (err) => console.log(err);)