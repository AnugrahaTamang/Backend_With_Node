import express from "express";
const app = express();
import { body, validationResult } from "express-validator";
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
var validationRegistration = [
  body("username")
    .notEmpty()
    .withMessage("username is required")
    .isLength({ min: 3 })
    .withMessage("username must be at least 3 character long...")
    .trim()
    .isAlpha()
    .withMessage("username must contaion only letter."),
  body("useremail").isEmail().withMessage("please provide a valid Email id.."),
  body("userpass")
    .isLength({ min: 5, max: 10 })
    .withMessage("password must be between 5 and 10 character long...")
    .isStrongPassword()
    .withMessage("Password must be strong.."),
  body("userage")
    .isNumeric()
    .withMessage("Age must be numeric..")
    .isInt({ min: 18 })
    .withMessage("Age must be at least 18 years old."),
  body("usercity")
    .isIn(["Delhi", "Mumbai", "Goa", "Agra"])
    .withMessage("city must be delhi, mumbai , agra and goa.."),
];
app.get("/myform", (req, res) => {
  res.render("myform", { errors: 0 });
});
app.post("/saveform", validationRegistration, (req, res) => {
  const error = validationResult(req);
  if (error.isEmpty()) {
    res.send(req.body);
  }
  res.render("myform", { errors: error.array() });
});
app.listen(3000, () => console.log("server up"));
