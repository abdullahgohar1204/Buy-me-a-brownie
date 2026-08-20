"use server";
import connectDB from "@/lib/db";
import Payment from "@/models/payment";
import { json } from "node:stream/consumers";

export async function createPayment(formData) {
    await connectDB();

    const payment = new Payment({
        name: formData.get("name"),
        to_user: formData.get("to_user"),
        amount: Number(formData.get("amount")),
        message: formData.get("message"),
    });

    await payment.save();
    return { success: true };
}

export async function getdata(to_user) {
    await connectDB();
    let data = await Payment.find({ to_user }).sort({ createdAt: -1 })
    return JSON.parse(JSON.stringify(data))
}