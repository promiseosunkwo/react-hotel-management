import Room from "../models/RoomModel.js";
import Hotel from "../models/HotelModel.js";
// import { createError } from "../utils/errors";


// Create New Room from Routes
export const createRoom = async (req, res, next) =>{

    const hotelId = req.params.hotelid; 
    const newRoom = new Room(req.body);

    try {
        const savedRoom = await newRoom.save();
        try {
            await Hotel.findByIdAndUpdate(hotelId, {$push : {rooms: savedRoom._id}, });
            
        } catch (err) {
            next(err);
        }
        res.status(200).json(savedRoom);
        
    } catch (err) {
        next(err);
    }
}


// update Room from routes
export const updateRoom = async (req, res, next)=>{
    try {
        const updateRoom = await Room.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true});
        res.status(200).json(updateRoom);
        
    } catch (err) {
        next(err);
    }
}



// Delete Rooms from routes
export const deleteRoom = async (req, res, next)=>{
    const hotelId = req.params.hotelid; 

    try {
        await Hotel.findByIdAndUpdate(hotelId, {$pull : {rooms: req.params.id}, });
        
    } catch (err) {
        next(err);
    }

    try {
        await Room.findByIdAndDelete(req.params.id);
        res.status(200).json("Room Deleted Successfully");   
    } catch (err) {
        next(err);
    }
}




// Get Single Rooms from routes
export const getSingleRoom = async (req, res, next)=>{
    try {
        const oneRoom = await Room.findById(req.params.id);
        res.status(200).json(oneRoom);   
    } catch (err) {
        next(err);
    }
}




// Get all Rooms from routes
export const getAllRooms = async (req, res, next)=>{
    // const failed = true;
    // if (failed) return next(createError(401, "You are not Authenticated!"));

    try {
        const allRooms = await Room.find();
        res.status(200).json(allRooms);   
    } catch (err) {
        next(err);
    }
}