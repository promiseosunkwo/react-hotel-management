import express from "express";
import { createRoom, deleteRoom, getAllRooms, getSingleRoom, updateRoom } from "../controllers/roomsController.js";
import { createError } from "../utils/errors.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router()

// Add a New Room from controller 
router.post("/:hotelid", verifyAdmin, createRoom);

// Update/Edit an Existing Room from controller 
router.put("/:id", verifyAdmin, updateRoom);


// Delete an Existing Room from controller 
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

// Get a particualar Room from controller 
router.get("/:id", verifyUser, getSingleRoom);

// Get all Rooms from controller 
router.get("/:id", verifyUser, getAllRooms) 




// router.get("/", (req, res)=>{
//     res.send("this is the rooms endpoint");
// })


export default router











