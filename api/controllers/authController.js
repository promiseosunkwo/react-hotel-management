import UserModel from "../models/UserModel.js"
import bcrypt from "bcryptjs";
import { createError } from "../utils/errors.js";
import Jwt  from "jsonwebtoken";

export const register = async (req, res, next) =>{
    
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new UserModel({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        });
        await newUser.save();
        res.status(200).json("User Created Successfully!");

    } catch (err) {
        next(err)
    }
  
}

export const login = async (req, res, next) =>{
    
    try {
        const user = await UserModel.findOne({username:req.body.username});
        if (!user) return next(createError(404, "User not Found!"))

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if (!isPasswordCorrect) return next(createError(404, "Incorrect Username or Password"));

        const token = Jwt.sign({id:user._id, isAdmin:user.isAdmin,}, process.env.JWT_TOKEN )
         
        const {password, isAdmin, ...others} = user._doc;
        
        res.cookie("access_token", token, { httpOnly:true,}).status(200).json({...others});
    
    } catch (err) {
        next(err) 
    }
  
}