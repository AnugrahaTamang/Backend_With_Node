import express from "express";
import {
  DelOne,
  getCon,
  getContact,
  getContactone,
  posCon,
  upOne,
  upPost,
} from "../controller/contact.controller";
const router = express.Router();

router.get("/", getContact);
router.get("/show-contact/:id", getContactone);
router.get("/add-contact", getCon);
router.post("/add-contact", posCon);
router.get("/update-contact/:id", upOne);
router.post("/update-contact/:id", upPost);
router.get("/delete-contact/:id", DelOne);

export default router;
