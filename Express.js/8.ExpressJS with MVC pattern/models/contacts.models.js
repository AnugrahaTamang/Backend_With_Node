import mongoose from "mongoose"; //1. mongoose package include
//2. create the schema
const contactSchema = new mongoose.Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
});
//3. store the schema inside  the model Note: model('collectionName', schemaName)
const Contact = mongoose.model("Contact", contactSchema);
export default Contact; //4. export the model
