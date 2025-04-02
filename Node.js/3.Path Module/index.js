const path = require("path");
//Base Name
console.log(path.basename("c:/node/node.js"));
console.log(__filename); //c:\Users\Lenovo\Desktop\Backend_With_Node\Node.js\3.Path Module\index.js
console.log(path.basename(__filename)); //index.js

//Omit extension
// console.log(path.basename(__filename, ".js"));

//Directory name
console.log(path.dirname("c:/nodejs/path/index.js"));

//Extension
console.log(path.extname("c:one/app.js")); //.js

//Join
console.log(path.join("c:/", "anugraha-webdev", "course", "js", "index.js")); //output: c:\anugraha-webdev\course\js\index.js
console.log(
  path.join("c:/", "anugraha-webdev", "course", "js", "index.js", "..") //output: c:\anugraha-webdev\course\js
);
console.log(
  path.join("c:/", "anugraha-webdev", "course", "js", "index.js", "..", "..") //output: c:\anugraha-webdev\course
);

//Normalize
console.log(path.normalize("c:\\courses\\redux-course\\"));
console.log(
  path.normalize("c:\\courses\\\\redux-course\\store\\\features\\..")
);
console.log(path.win32.normalize("C://projects//react///advance-search//"));

//Parse
console.log(path.parse("c:/node/app.js"));
console.log(path.parse("c:/node/app.js").base); //app.js
console.log(path.parse("c:/node/one.js").name); //one
console.log(path.parse("c:/node/one.js").ext); //.js
