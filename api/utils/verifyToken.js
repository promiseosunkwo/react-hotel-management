import { createError } from "../utils/errors.js";
import Jwt  from "jsonwebtoken";

export const verifyToken = (req, res, next) =>{
    const token = req.cookies.access_token;
    if (!token) return next(createError(401, "You are not authenticated!"));
    Jwt.verify(token, process.env.JWT_TOKEN, (err, user) =>{
        if (err) return next(createError(403, "Invalid Token!"))
        req.user = user;
        next();
    })
}

export const verifyUser = (req, res, next) =>{
    verifyToken (req, res, next, ()=>{
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        }else{
            return next(createError(401, "You are not Authorized!"))
        }
    })
}


export const verifyAdmin = (req, res, next) =>{
    verifyToken (req, res, next, ()=>{
        if (req.user.isAdmin) {
            next();
        }else{
            return next(createError(401, "You are not Authorized!"))
        }
    })
}