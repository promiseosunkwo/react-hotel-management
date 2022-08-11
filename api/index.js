import authRouter from "./routes/auth.js";
import usersRouter from "./routes/users.js";
import roomsRouter from "./routes/rooms.js";
import hotelsRouter from "./routes/hotels.js";
import cookieParser from "cookie-parser";


import dotenv from "dotenv";
dotenv.config()

import express from "express";
import mongoose from "mongoose";
const app = express();

//Middlewares

//for keeping keys in cookies
app.use(cookieParser());

// express.json middleware allows you to use json in postman
app.use(express.json());
// all routing from routes/auth.js will go through the authRouter
app.use("/api/auth", authRouter);
// all routing from routes/users.js will go through the authRouter
app.use("/api/users", usersRouter);
// all routing from routes/rooms.js will go through the authRouter
app.use("/api/rooms", roomsRouter);
// all routing from routes/hotels.js will go through the authRouter
app.use("/api/hotels", hotelsRouter);


// error handler for all routes
app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    return res.status(500).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});

// connects straight to online mongodb server through with .env
const MongoConnect = async () => {
try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
} catch (error) {
    throw error;
}
}

// express port listener
app.listen(8800, ()=>{
    MongoConnect();
    console.log("Connected to Backend!");
})