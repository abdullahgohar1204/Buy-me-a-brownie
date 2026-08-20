"use server"
import connectDB from "@/lib/db";
import User from "@/models/user"

export async function getUser(email) {
    await connectDB();

    let data = await User.findOne({ email });
    return JSON.parse(JSON.stringify(data));
}

export async function updateUser(formData) {
    await connectDB();

    const email = formData.get("email")
    const updates = {
        name: formData.get("name"),
        username: formData.get("username"),
        paymentId: formData.get("paymentId"),
        paymentSecret: formData.get("paymentSecret"),
        profilepic: formData.get("profilepic"),
        coverpic: formData.get("coverpic"),
    }

    const updatedUser = await User.findOneAndUpdate(
        { email },
        updates,
        { returnDocument: 'after', runValidators: true }
    );

    return JSON.parse(JSON.stringify(updatedUser));
}


