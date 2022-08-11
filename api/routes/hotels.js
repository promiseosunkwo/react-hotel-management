import express from "express";
import { createHotel, deleteHotel, getAllHotels, getSingleHotel, updateHotel } from "../controllers/hotelsController.js";
import { createError } from "../utils/errors.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router()


// Add a New Hotel from controller 
router.post("/", verifyAdmin, createHotel);

// Update/Edit an Existing Hotel from controller 
router.put("/:id", verifyAdmin, updateHotel);


// Delete an Existing Hotel from controller 
router.delete("/:id", verifyAdmin, deleteHotel);

// Get a particualar Hotel from controller 
router.get("/:id", verifyUser, getSingleHotel);

// Get all Hotels from controller 
router.get("/", verifyUser, getAllHotels) 





export default router