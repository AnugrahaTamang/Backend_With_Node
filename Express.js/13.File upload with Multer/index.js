import express from "express";
const app = express();
import multer from "multer";
import path from "path";
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    const newFileName = Date.now() + path.extname(file.originalname);
    cb(null, newFileName);
  },
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/jpeg")) {
    cb(null, true);
  } else {
    cb(new Error("Only images are allowed! "), false);
  }
};
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 3 }, //3mb
  fileFilter,
});

app.get("/", (req, res) => {
  res.render("myform");
});
app.post("/submitform", upload.single("userfile"), (req, res) => {
  res.send(req.file);
});
app.listen(3000, () => console.log("server up"));
