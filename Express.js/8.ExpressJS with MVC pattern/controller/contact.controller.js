import Contact from "../models/contacts.models.js";
export const getContact = async (req, res) => {
  const contacts = await Contact.find();
  res.render("home", { contacts: contacts });
};
export const getContactone = async (req, res) => {
  const contact = await Contact.findOne({ _id: req.params.id });
  //another way of writing above query using method of mongoose
  //   const contact = await Contact.findById(req.params.id)
  res.render("show-contact", { contact: contact });
};

export const getCon = (req, res) => {
  res.render("add-contact");
};
export const posCon = async (req, res) => {
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
};
export const upOne = async (req, res) => {
  // const contact = await Contact.findOne({ _id: req.params.id });
  const contact = await Contact.findById(req.params.id);
  res.render("update-contact", { contact });
};
export const upPost = async (req, res) => {
  //ordering destructure the form data
  // const {first_name, last_name, email, phone, address} = req.body
  // await Contact.findByIdAndUpdate(req.params.id, {first_name, last_name, email, phone, address})
  await Contact.findByIdAndUpdate(req.params.id, req.body); //Short Method if (form key name and database fieldName is same)
  res.redirect("/");
};
export const DelOne = async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.redirect("/");
};
