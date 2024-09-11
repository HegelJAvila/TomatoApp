import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://hegel3003:hkeegyella220696@cluster0.shwtr.mongodb.net/food-page')
                  .then(() => console.log('DB Connected'));
}