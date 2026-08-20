import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    name: { type: String },
    profilepic: { type: String },
    coverpic: { type: String },
    paymentId: { type: String },
    paymentSecret: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

export default mongoose.models.User || mongoose.model('User', UserSchema);


