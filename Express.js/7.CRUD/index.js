import express from "express";
import mongoose from "mongoose";
const app = express();
import Contact from "./models/contacts.models.js";
//Database connection
mongoose
  .connect("mongodb://127.0.0.1:27017/contacts-crud")
  .then(() => console.log("Database connected..."));
app.listen(3000, () => console.log("server up"));
//Middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
//Routes
app.get("/", async (req, res) => {
  const contacts = await Contact.find();
  res.render("home", { contacts: contacts });
});
app.get("/show-contact/:id", async (req, res) => {
  const contact = await Contact.findOne({ _id: req.params.id });
  //another way of writing above query using method of mongoose
  //   const contact = await Contact.findById(req.params.id)
  res.render("show-contact", { contact: contact });
});
app.get("/add-contact", (req, res) => {
  res.render("add-contact");
});
app.post("/add-contact", async (req, res) => {
  //   await Contact.insertOne({
  //     first_name: req.body.first_name,
  //     last_name: req.body.last_name,
  //     email: req.body.email,
  //     phone: req.body.phone,
  //     address: req.body.adress,
  //   });
  //another way of using mongodb built in method
  await Contact.create(req.body);
  res.redirect("/");
});
app.get("/update-contact/:id", async (req, res) => {
  // const contact = await Contact.findOne({ _id: req.params.id });
  const contact = await Contact.findById(req.params.id);
  res.render("update-contact", { contact });
});
app.post("/update-contact/:id", async (req, res) => {
  //ordering destructure the form data
  // const {first_name, last_name, email, phone, address} = req.body
  // await Contact.findByIdAndUpdate(req.params.id, {first_name, last_name, email, phone, address})
  await Contact.findByIdAndUpdate(req.params.id, req.body); //Short Method if (form key name and database fieldName is same)
  res.redirect("/");
});
app.get("/delete-contact/:id", async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.redirect("/");
});
