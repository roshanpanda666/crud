import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    clg: { type: String, required: true },
    blog: { type: String, required: false }, // Optional field
    user: { type: String, required: true },
    interest: { type: String, required: false }, // Optional field
});

export const User = mongoose.models.crudo || mongoose.model("crudo", userSchema);
