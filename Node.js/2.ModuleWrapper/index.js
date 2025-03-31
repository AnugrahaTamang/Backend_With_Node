// Module wrapper: Before module's code is executed, Node.js will wrap it with a function wrapper that looks like the following .
(function (exports, require, module, __filename, __dirname) {
  //module code
})();

// This function call the IIFE (immediately invoked function expression)

import greet from "./one.js";
greet("Anugraha Tamang", 22); //output: My name is Anugraha Tamang. I am 22 years old.
