import mongoose from "mongoose";
import dotenv from "dotenv"; //outside the index.js file we have to use the dotenv package for environment variable.
dotenv.config();
export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Database connected..."));
};
