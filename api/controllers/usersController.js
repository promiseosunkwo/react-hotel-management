import UserModel from "../models/HotelModel.js";

// Add a New User from routes
export const createUser = async (req, res, next)=>{
    const newHotel = new UserModel(req.body);
    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
        
    } catch (err) {
         next(err);
    }
}


// update Hotel from routes
export const updateUser = async (req, res, next)=>{
    try {
        const updateHotel = await UserModel.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true});
        res.status(200).json(updateHotel);
        
    } catch (err) {
        next(err);
    }
}

// Delete User from routes
export const deleteUser = async (req, res, next)=>{
    try {
        await UserModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel Deleted Successfully");   
    } catch (err) {
        next(err);
    }
}


// Get Single User from routes
export const getSingleUser = async (req, res, next)=>{
    try {
        const oneUser = await UserModel.findById(req.params.id);
        res.status(200).json(oneUser);   
    } catch (err) {
        next(err);
    }
}



// Get all Users from routes
export const getAllUsers = async (req, res, next)=>{
   
    // const failed = true;
    // if (failed) return next(createError(401, "You are not Authenticated!"));

    try {
        const allUsers = await UserModel.find();
        res.status(200).json(allUsers);   
    } catch (err) {
        next(err);
    }
}