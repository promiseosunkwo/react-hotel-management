import express from "express";
import { createUser, deleteUser, getAllUsers, getSingleUser, updateUser} from "../controllers/usersController.js";
import { createError } from "../utils/errors.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router()


// router.get("/checkauth", verifyToken, (req,res,next)=>{
//     res.send("Hello User, you are now logged in.")
// })

// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//     res.send("Hello User, you are now logged in and can delete your account.")
// })


// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//     res.send("Hello Admin, you are now logged in and can delete or edit any account.")
// })


// Add a New User from controller 
router.post("/", createUser);

// Update/Edit an Existing User from controller 
router.put("/:id", verifyUser, updateUser);


// Delete an Existing User from controller 
router.delete("/:id", verifyUser, deleteUser);

// Get a particualar User from controller 
router.get("/:id", verifyUser, getSingleUser);

// Get all Users from controller 
router.get("/", verifyAdmin, getAllUsers) 



export default router