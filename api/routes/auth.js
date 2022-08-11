import express from "express";
import { login, register } from "../controllers/authController.js";

const router = express.Router()

// router.get("/", (req, res)=>{
//     res.send("this is the auth endpoint");
// })

router.post("/register", register);

router.post("/login", login);


export default router