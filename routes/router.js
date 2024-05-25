import express from "express";
import {
  home,
  addUser,
  getUsers,
  about,
  login,
  register,
  contact,
} from "../controllers/controller.js";
const router = express.Router();

router.get("/", home);

router.post("/register", addUser);

router.get("/users", getUsers);

router.get("/contact", contact);

router.get("/login", login);

router.get("/register", register);

router.get("/about", about);

export default router;
