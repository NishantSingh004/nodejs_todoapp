import { getAllUser, getUserById, register } from "../controlers/user.js";
import express from "express"

const router = express.Router();

router.get("/all", getAllUser)

router.post("/new", register)

  //dynamic routing
router.get("/userid/:id", getUserById)

export default router