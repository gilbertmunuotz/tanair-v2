// Import npm packages
import { Schema, model, models } from 'mongoose';
import { User } from "@/interfaces/interface";

// **** Functions **** //
const userSchema = new Schema<User>({
    email: { type: "String", required: true, unique: true },
    password: { type: "String", required: true }
}, { timestamps: true });

// ****Check if model existst &Export default it **** //
const userModel = models.User || model<User>("User", userSchema);
export default userModel;