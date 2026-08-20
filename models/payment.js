import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    to_user: { type: String, required: true },
    amount: { type: Number, required: true },
    message: { type: String },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Payment || mongoose.model('Payment', PaymentSchema);