import Hotel from "../models/HotelModel.js";

// Add a New Hotel from routes
export const createHotel = async (req, res, next)=>{
    const newHotel = new Hotel(req.body);
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
        
    } catch (err) {
         next(err);
    }
}


// update Hotel from routes
export const updateHotel = async (req, res, next)=>{
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true});
        res.status(200).json(updateHotel);
        
    } catch (err) {
        next(err);
    }
}

// Delete Hotel from routes
export const deleteHotel = async (req, res, next)=>{
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel Deleted Successfully");   
    } catch (err) {
        next(err);
    }
}


// Get Single Hotel from routes
export const getSingleHotel = async (req, res, next)=>{
    try {
        const oneHotel = await Hotel.findById(req.params.id);
        res.status(200).json(oneHotel);   
    } catch (err) {
        next(err);
    }
}



// Get all Hotels from routes
export const getAllHotels = async (req, res, next)=>{
   
    // const failed = true;
    // if (failed) return next(createError(401, "You are not Authenticated!"));

    try {
        const allHotels = await Hotel.find();
        res.status(200).json(allHotels);   
    } catch (err) {
        next(err);
    }
}