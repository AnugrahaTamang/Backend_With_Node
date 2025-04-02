import { URL } from "url";
const myurl = new URL("https://www.example.com:2000/p/n");
console.log(myurl.host); //www.example.com:2000
console.log(myurl.port); //2000
console.log(myurl.href); //https://www.example.com:2000/p/n
console.log(myurl.protocol); //https:
