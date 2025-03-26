import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://prashanthimojerla24:mojerla24@cluster0.f4o6p.mongodb.net/food-delivery').then(()=>console.log("DB Connected"));
}