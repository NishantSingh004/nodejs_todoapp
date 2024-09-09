import { getMyProfile, login, logout, register } from "../controlers/user.js";
import express from "express"
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.post("/new", register)
router.post("/login", login)
router.get("/logout", logout)




  //dynamic routing

  router.get("/me", isAuthenticated, getMyProfile)

  //this uper way and the code below both are same so if we are using diffrent diffrent method with same url  then we can use the above method which is best way tp do 

// router.get("/userid/:id", getUserById)

// router.put("/userid/:id", updateUser)

// router.delete("/userid/:id", deleteUser)

export default router