import express from "express";
const app = express();

import contactroutes from "./routes/contacts.router.js";
const PORT = process.env.PORT;
//Database connection
import { connectDB } from "./config/database.js";
connectDB();
//Middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
//Routes
app.use("/", contactroutes);
app.listen(PORT, () => console.log(`server up ${PORT}`));
